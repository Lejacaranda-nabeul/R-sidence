package com.lajacaranda.residence.data.remote

import com.lajacaranda.residence.data.model.Ticket
import com.lajacaranda.residence.data.model.TicketCategory
import com.lajacaranda.residence.data.model.TicketStatus
import com.lajacaranda.residence.data.model.TicketType
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.MutableStateFlow

class FirestoreRepository {

    private val _cloudTickets = MutableStateFlow<List<Ticket>>(emptyList())
    val cloudTickets: Flow<List<Ticket>> = _cloudTickets

    fun syncTicketToFirestore(ticket: Ticket) {
        // Mock / Live Firestore sync insertion:
        // db.collection("tickets").document(ticket.id).set(ticket)
        val current = _cloudTickets.value.toMutableList()
        val index = current.indexOfFirst { it.id == ticket.id }
        if (index != -1) {
            current[index] = ticket
        } else {
            current.add(0, ticket)
        }
        _cloudTickets.value = current
    }

    fun updateTicketStatusInFirestore(ticketId: String, newStatus: TicketStatus, responseText: String?) {
        // db.collection("tickets").document(ticketId).update("status", newStatus.name, "syndicResponse", responseText)
        val current = _cloudTickets.value.toMutableList()
        val index = current.indexOfFirst { it.id == ticketId }
        if (index != -1) {
            val updated = current[index].copy(
                status = newStatus,
                syndicResponse = responseText ?: current[index].syndicResponse
            )
            current[index] = updated
            _cloudTickets.value = current
        }
    }

    companion object {
        val instance by lazy { FirestoreRepository() }
    }
}
