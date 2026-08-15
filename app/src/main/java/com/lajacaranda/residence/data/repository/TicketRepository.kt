package com.lajacaranda.residence.data.repository

import android.content.Context
import com.lajacaranda.residence.data.local.LocalSharedDataManager
import com.lajacaranda.residence.data.model.Ticket
import com.lajacaranda.residence.data.model.TicketCategory
import com.lajacaranda.residence.data.model.TicketStatus
import com.lajacaranda.residence.data.model.TicketType
import com.lajacaranda.residence.data.remote.FirestoreRepository
import com.lajacaranda.residence.data.remote.supabase.SupabaseRepository
import com.lajacaranda.residence.util.NotificationHelper
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import java.util.UUID

class TicketRepository(
    private val firestoreRepository: FirestoreRepository = FirestoreRepository.instance,
    private val supabaseRepository: SupabaseRepository = SupabaseRepository.instance
) {

    private val _tickets = MutableStateFlow<List<Ticket>>(LocalSharedDataManager.loadTickets())
    val tickets: StateFlow<List<Ticket>> = _tickets.asStateFlow()

    init {
        // Inter-process & Supabase Cloud polling loop (2.5s) to receive new tickets/responses across apps
        CoroutineScope(Dispatchers.IO).launch {
            while (true) {
                delay(2500)
                try {
                    val localTickets = LocalSharedDataManager.loadTickets()
                    val cloudTickets = supabaseRepository.fetchTicketsFromSupabase()

                    val ticketMap = LinkedHashMap<String, Ticket>()
                    // 1. Put local tickets first
                    for (t in localTickets) {
                        ticketMap[t.id] = t
                    }
                    // 2. Put cloud tickets (updating or adding cloud data)
                    if (cloudTickets != null) {
                        for (t in cloudTickets) {
                            ticketMap[t.id] = t
                        }
                    }

                    val mergedList = ticketMap.values.sortedByDescending { it.timestamp }
                    if (mergedList != _tickets.value) {
                        _tickets.value = mergedList
                        LocalSharedDataManager.saveTickets(mergedList)
                    }

                    // 3. Auto-sync: push any local tickets missing on cloud up to Supabase
                    if (cloudTickets != null && cloudTickets.isNotEmpty()) {
                        val cloudIds = cloudTickets.map { it.id }.toSet()
                        for (localT in localTickets) {
                            if (localT.id !in cloudIds) {
                                supabaseRepository.pushTicketToSupabase(localT)
                            }
                        }
                    }
                } catch (e: Exception) {
                    // Ignore transient storage errors
                }
            }
        }
    }

    fun addTicket(
        apartmentCode: String,
        whatsappNumber: String,
        type: TicketType,
        category: TicketCategory,
        description: String,
        imageUri: String? = null,
        context: Context? = null
    ): Ticket {
        val newTicket = Ticket(
            id = "JAC-" + UUID.randomUUID().toString().take(6).uppercase(),
            apartmentCode = apartmentCode,
            whatsappNumber = whatsappNumber,
            type = type,
            category = category,
            description = description,
            imageUri = imageUri,
            status = TicketStatus.SENT,
            timestamp = System.currentTimeMillis()
        )
        val updatedList = listOf(newTicket) + _tickets.value
        _tickets.value = updatedList
        LocalSharedDataManager.saveTickets(updatedList)

        // Supabase Cloud Sync
        CoroutineScope(Dispatchers.IO).launch {
            supabaseRepository.pushTicketToSupabase(newTicket)
        }

        // Direct Firebase Cloud Sync
        firestoreRepository.syncTicketToFirestore(newTicket)

        // Push Notification to Syndic
        context?.let {
            NotificationHelper.sendNewTicketAlertToSyndic(it, newTicket)
        }

        return newTicket
    }

    fun updateTicketStatus(
        ticketId: String,
        newStatus: TicketStatus,
        responseText: String? = null,
        context: Context? = null
    ) {
        var updatedTicket: Ticket? = null

        val updatedList = _tickets.value.map { ticket ->
            if (ticket.id == ticketId) {
                val updated = ticket.copy(
                    status = newStatus,
                    syndicResponse = responseText ?: ticket.syndicResponse
                )
                updatedTicket = updated
                updated
            } else {
                ticket
            }
        }

        _tickets.value = updatedList
        LocalSharedDataManager.saveTickets(updatedList)

        // Supabase Cloud Sync update
        CoroutineScope(Dispatchers.IO).launch {
            supabaseRepository.updateTicketStatusInSupabase(ticketId, newStatus, responseText)
        }

        // Direct Firebase Cloud Sync update
        firestoreRepository.updateTicketStatusInFirestore(ticketId, newStatus, responseText)

        // Trigger push notification to resident
        updatedTicket?.let { ticket ->
            context?.let { ctx ->
                NotificationHelper.sendTicketStatusNotification(ctx, ticket, newStatus)
            }
        }
    }

    fun getTicketsForApartment(apartmentCode: String): List<Ticket> {
        return _tickets.value.filter { it.apartmentCode.equals(apartmentCode, ignoreCase = true) }
    }

    fun getTicketById(ticketId: String): Ticket? {
        return _tickets.value.find { it.id == ticketId }
    }

    fun deleteTicket(ticketId: String) {
        val updatedList = _tickets.value.filter { it.id != ticketId }
        _tickets.value = updatedList
        LocalSharedDataManager.saveTickets(updatedList)
        CoroutineScope(Dispatchers.IO).launch {
            supabaseRepository.deleteTicketFromSupabase(ticketId)
        }
    }

    fun clearAllTickets() {
        _tickets.value = emptyList()
        LocalSharedDataManager.clearAllTickets()
        CoroutineScope(Dispatchers.IO).launch {
            supabaseRepository.clearAllTicketsFromSupabase()
        }
    }

    companion object {
        val instance by lazy { TicketRepository() }
    }
}

