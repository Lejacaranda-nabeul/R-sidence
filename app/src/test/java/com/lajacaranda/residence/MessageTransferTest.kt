package com.lajacaranda.residence

import com.lajacaranda.residence.data.model.BroadcastMessage
import com.lajacaranda.residence.data.model.BroadcastTarget
import com.lajacaranda.residence.data.model.BroadcastType
import com.lajacaranda.residence.data.model.Ticket
import com.lajacaranda.residence.data.model.TicketCategory
import com.lajacaranda.residence.data.model.TicketStatus
import com.lajacaranda.residence.data.model.TicketType
import org.junit.Assert.*
import org.junit.Test
import java.util.UUID

/**
 * Tests purs (JVM) du transfert de messages entre les applications Résident et Syndic.
 *
 * Ces tests valident la logique métier sans aucune dépendance Android :
 *  - Création et filtrage des tickets par type
 *  - Réponse du Syndic avec mise à jour du statut
 *  - Filtrage des annonces broadcast par bâtiment
 *  - Smart merge (fusion locale + cloud sans doublons)
 *  - Traitement des messages de type MESSAGE vs CLAIM vs PROPOSAL
 */
class MessageTransferTest {

    // =========================================================
    // Helpers : logique métier pure (sans I/O ni Android APIs)
    // =========================================================

    private fun newId() = "JAC-" + UUID.randomUUID().toString().take(6).uppercase()
    private fun newBcId() = "BC-" + UUID.randomUUID().toString().take(6).uppercase()

    /**
     * Smart merge : fusionne tickets locaux et cloud par ID.
     * En cas de conflit (même ID), le cloud prend la priorité (données les plus récentes).
     * Retour trié du plus récent au plus ancien.
     */
    private fun smartMergeTickets(local: List<Ticket>, cloud: List<Ticket>): List<Ticket> {
        val map = LinkedHashMap<String, Ticket>()
        for (t in local) map[t.id] = t
        for (t in cloud) map[t.id] = t   // cloud overwrites local (newer data)
        return map.values.sortedByDescending { it.timestamp }
    }

    /**
     * Filtre les annonces broadcast visibles par un résident selon son code appartement.
     * Le bâtiment est déduit de la première lettre du code (ex: "A11" → Bâtiment A).
     */
    private fun getBroadcastsForResident(
        apartmentCode: String,
        allMessages: List<BroadcastMessage>
    ): List<BroadcastMessage> {
        val building = apartmentCode.take(1).uppercase()
        return allMessages.filter { msg ->
            when (msg.target) {
                BroadcastTarget.ALL -> true
                BroadcastTarget.BUILDING_A -> building == "A"
                BroadcastTarget.BUILDING_B -> building == "B"
                BroadcastTarget.BUILDING_C -> building == "C"
                BroadcastTarget.BUILDING_D -> building == "D"
                BroadcastTarget.SPECIFIC_APARTMENT ->
                    msg.targetApartmentCode.equals(apartmentCode, ignoreCase = true)
            }
        }
    }

    /**
     * Filtre les messages de type MESSAGE dans la boîte du Syndic.
     */
    private fun getDirectMessages(inbox: List<Ticket>): List<Ticket> =
        inbox.filter { it.type == TicketType.MESSAGE }

    /**
     * Filtre les réclamations (CLAIM) dans la boîte du Syndic.
     */
    private fun getClaims(inbox: List<Ticket>): List<Ticket> =
        inbox.filter { it.type == TicketType.CLAIM }

    // =========================================================
    // TEST 1 : Le résident envoie un message direct → visible par le Syndic
    // =========================================================

    @Test
    fun `Resident sends direct message - Syndic can see it in inbox`() {
        // GIVEN : Un résident de l'appartement A11 rédige un message direct
        val ticket = Ticket(
            id = newId(),
            apartmentCode = "A11",
            whatsappNumber = "+212600112233",
            type = TicketType.MESSAGE,
            category = TicketCategory.OTHER,
            description = "Bonjour, quand aura lieu la prochaine réunion de syndic ?",
            status = TicketStatus.SENT,
            timestamp = System.currentTimeMillis()
        )

        // WHEN : L'app Syndic reçoit les tickets (simulation : même liste)
        val syndicInbox = listOf(ticket)

        // THEN : Le message doit apparaître dans la boîte "Messages Directs" du Syndic
        val directMessages = getDirectMessages(syndicInbox)
        assertTrue("La boîte messages directs ne doit pas être vide", directMessages.isNotEmpty())

        val received = directMessages.find { it.id == ticket.id }
        assertNotNull("Le message A11 doit être dans la boîte Syndic", received)
        assertEquals(TicketType.MESSAGE, received!!.type)
        assertEquals("A11", received.apartmentCode)
        assertEquals(TicketStatus.SENT, received.status)
        assertNull("Pas encore de réponse du Syndic", received.syndicResponse)
    }

    // =========================================================
    // TEST 2 : Résident envoie une réclamation → Syndic répond → résident voit la réponse
    // =========================================================

    @Test
    fun `Resident submits claim - Syndic responds - resident sees updated status`() {
        // GIVEN : Réclamation ascenseur de B22
        val originalClaim = Ticket(
            id = "JAC-CLAIM1",
            apartmentCode = "B22",
            whatsappNumber = "+212600445566",
            type = TicketType.CLAIM,
            category = TicketCategory.ELEVATOR,
            description = "L'ascenseur du bâtiment B fait un bruit anormal depuis 3 jours.",
            status = TicketStatus.SENT,
            timestamp = 1000L
        )
        // Syndic reçoit la réclamation
        val syndicInbox = listOf(originalClaim)
        val found = getClaims(syndicInbox).find { it.id == originalClaim.id }
        assertNotNull("La réclamation B22 doit être visible par le Syndic", found)

        // WHEN : Le Syndic répond et met à jour le statut
        val syndicReply = "Un technicien intervient demain à 14h. Merci de votre patience."
        val updatedTicket = found!!.copy(
            status = TicketStatus.IN_PROGRESS,
            syndicResponse = syndicReply
        )

        // Simulation de la synchronisation : le résident relit les données mises à jour
        val residentView = listOf(updatedTicket)
        val ticketForResident = residentView.find { it.id == originalClaim.id }

        // THEN : Le résident voit la réponse et le nouveau statut
        assertNotNull(ticketForResident)
        assertEquals(TicketStatus.IN_PROGRESS, ticketForResident!!.status)
        assertEquals(syndicReply, ticketForResident.syndicResponse)
        assertEquals("B22", ticketForResident.apartmentCode)
    }

    // =========================================================
    // TEST 3 : Filtrage des annonces par bâtiment
    // =========================================================

    @Test
    fun `Broadcast for Building A is visible only to Building A residents`() {
        // GIVEN : Deux annonces — une pour le Bâtiment A, une pour tout le monde
        val bcBuildingA = BroadcastMessage(
            id = newBcId(),
            title = "Nettoyage des réservoirs",
            content = "Maintenance ce samedi pour le Bâtiment A uniquement.",
            type = BroadcastType.GENERAL_INFO,
            target = BroadcastTarget.BUILDING_A,
            senderTitle = "Bureau du Syndic",
            timestamp = 1000L
        )
        val bcForAll = BroadcastMessage(
            id = newBcId(),
            title = "Assemblée Générale",
            content = "Réunion le 15 août à 18h — Salle commune.",
            type = BroadcastType.ASSEMBLY_NOTICE,
            target = BroadcastTarget.ALL,
            senderTitle = "Président du Syndic",
            timestamp = 2000L
        )
        val allMessages = listOf(bcBuildingA, bcForAll)

        // WHEN : chaque résident charge son flux filtré
        val inboxA11 = getBroadcastsForResident("A11", allMessages)
        val inboxB22 = getBroadcastsForResident("B22", allMessages)
        val inboxC15 = getBroadcastsForResident("C15", allMessages)

        // THEN : Vérifications de visibilité
        assertTrue("A11 doit voir l'annonce Bâtiment A", inboxA11.any { it.id == bcBuildingA.id })
        assertTrue("A11 doit voir l'annonce générale", inboxA11.any { it.id == bcForAll.id })
        assertEquals(2, inboxA11.size)

        assertFalse("B22 NE doit PAS voir l'annonce Bâtiment A", inboxB22.any { it.id == bcBuildingA.id })
        assertTrue("B22 doit voir l'annonce générale", inboxB22.any { it.id == bcForAll.id })
        assertEquals(1, inboxB22.size)

        assertFalse("C15 NE doit PAS voir l'annonce Bâtiment A", inboxC15.any { it.id == bcBuildingA.id })
        assertEquals(1, inboxC15.size)
    }

    // =========================================================
    // TEST 4 : Smart Merge — fusion locale + cloud sans perte de données
    // =========================================================

    @Test
    fun `Smart merge preserves local-only ticket and adds cloud ticket without duplicates`() {
        // GIVEN : Un ticket local non encore synchronisé avec Supabase
        val localOnly = Ticket(
            id = "JAC-LOCAL1",
            apartmentCode = "C15",
            whatsappNumber = "+212611223344",
            type = TicketType.PROPOSAL,
            category = TicketCategory.OTHER,
            description = "Installer des lampes LED solaires dans l'allée principale.",
            status = TicketStatus.SENT,
            timestamp = 1000L
        )
        // GIVEN : Un ticket déjà sur Supabase (d'un autre résident)
        val cloudTicket = Ticket(
            id = "JAC-CLOUD1",
            apartmentCode = "A11",
            whatsappNumber = "+212600112233",
            type = TicketType.CLAIM,
            category = TicketCategory.ELECTRICITY,
            description = "Panne d'électricité dans le couloir bâtiment A.",
            status = TicketStatus.IN_PROGRESS,
            timestamp = 2000L
        )

        // WHEN : Smart merge
        val merged = smartMergeTickets(local = listOf(localOnly), cloud = listOf(cloudTicket))

        // THEN : Les deux tickets sont présents, triés du plus récent au plus ancien
        assertEquals("Le merge doit produire exactement 2 tickets", 2, merged.size)
        assertTrue("Ticket local doit être conservé", merged.any { it.id == "JAC-LOCAL1" })
        assertTrue("Ticket cloud doit être ajouté", merged.any { it.id == "JAC-CLOUD1" })
        // Le ticket cloud (timestamp=2000) doit être en premier
        assertEquals("JAC-CLOUD1", merged.first().id)
        assertEquals("JAC-LOCAL1", merged.last().id)
    }

    // =========================================================
    // TEST 5 : Smart Merge — le cloud écrase la version locale pour le même ID
    // =========================================================

    @Test
    fun `Smart merge - cloud version overwrites local version for same ticket ID`() {
        // GIVEN : Ticket local avec statut SENT
        val localTicket = Ticket(
            id = "JAC-SAME1",
            apartmentCode = "B33",
            whatsappNumber = "+212600777888",
            type = TicketType.CLAIM,
            category = TicketCategory.WATER,
            description = "Fuite d'eau dans la cuisine.",
            status = TicketStatus.SENT,
            timestamp = 1000L
        )
        // GIVEN : Même ticket sur Supabase, mais mis à jour par le Syndic
        val cloudUpdated = localTicket.copy(
            status = TicketStatus.RESOLVED,
            syndicResponse = "Réparation effectuée le 05/08. Robinet remplacé.",
            timestamp = 5000L
        )

        // WHEN : Smart merge
        val merged = smartMergeTickets(local = listOf(localTicket), cloud = listOf(cloudUpdated))

        // THEN : Pas de doublon, et la version cloud (Syndic) est retenue
        assertEquals("Pas de doublon : un seul ticket", 1, merged.size)
        val result = merged.first()
        assertEquals(TicketStatus.RESOLVED, result.status)
        assertNotNull("La réponse du Syndic doit être présente", result.syndicResponse)
        assertEquals("Réparation effectuée le 05/08. Robinet remplacé.", result.syndicResponse)
    }

    // =========================================================
    // TEST 6 : Les 3 types de tickets sont correctement catégorisés
    // =========================================================

    @Test
    fun `Syndic inbox correctly separates messages claims and proposals`() {
        // GIVEN : Trois tickets de types différents
        val message = Ticket("JAC-M1", "A11", "+21260001", TicketType.MESSAGE, TicketCategory.OTHER, "Question sur la réunion", timestamp = 3000L)
        val claim   = Ticket("JAC-C1", "B22", "+21260002", TicketType.CLAIM, TicketCategory.ELEVATOR, "Panne ascenseur", timestamp = 2000L)
        val proposal = Ticket("JAC-P1", "C15", "+21260003", TicketType.PROPOSAL, TicketCategory.OTHER, "Jardinage de l'entrée", timestamp = 1000L)
        val inbox = listOf(message, claim, proposal)

        // WHEN
        val directMessages = inbox.filter { it.type == TicketType.MESSAGE }
        val claims         = inbox.filter { it.type == TicketType.CLAIM }
        val proposals      = inbox.filter { it.type == TicketType.PROPOSAL }

        // THEN
        assertEquals(1, directMessages.size)
        assertEquals("JAC-M1", directMessages.first().id)

        assertEquals(1, claims.size)
        assertEquals("JAC-C1", claims.first().id)

        assertEquals(1, proposals.size)
        assertEquals("JAC-P1", proposals.first().id)

        // Vérification globale : 3 tickets distincts, pas de perte
        assertEquals(3, inbox.size)
    }
}
