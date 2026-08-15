package com.lajacaranda.residence.ui.screens.syndic

import android.content.Context
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.lajacaranda.residence.data.model.Ticket
import com.lajacaranda.residence.data.model.TicketStatus
import com.lajacaranda.residence.data.model.TicketType
import com.lajacaranda.residence.data.repository.TicketRepository
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.combine
import kotlinx.coroutines.flow.stateIn

sealed class TicketFilter {
    object All : TicketFilter()
    object NewSent : TicketFilter()
    object Claims : TicketFilter()
    object Proposals : TicketFilter()
    object DirectMessages : TicketFilter()
    object InProgress : TicketFilter()
    object Resolved : TicketFilter()
}

data class SyndicInboxStats(
    val totalCount: Int = 0,
    val newCount: Int = 0,
    val claimsCount: Int = 0,
    val proposalsCount: Int = 0,
    val messagesCount: Int = 0,
    val inProgressCount: Int = 0,
    val resolvedCount: Int = 0
)

class SyndicViewModel(
    private val ticketRepository: TicketRepository = TicketRepository.instance
) : ViewModel() {

    private val _currentFilter = MutableStateFlow<TicketFilter>(TicketFilter.All)
    val currentFilter: StateFlow<TicketFilter> = _currentFilter.asStateFlow()

    private val _selectedTicketId = MutableStateFlow<String?>(null)
    private val _responseInput = MutableStateFlow("")

    val stats: StateFlow<SyndicInboxStats> = ticketRepository.tickets.combine(MutableStateFlow(Unit)) { all, _ ->
        SyndicInboxStats(
            totalCount = all.size,
            newCount = all.count { it.status == TicketStatus.SENT },
            claimsCount = all.count { it.type == TicketType.CLAIM },
            proposalsCount = all.count { it.type == TicketType.PROPOSAL },
            messagesCount = all.count { it.type == TicketType.MESSAGE },
            inProgressCount = all.count { it.status == TicketStatus.IN_PROGRESS },
            resolvedCount = all.count { it.status == TicketStatus.RESOLVED }
        )
    }.stateIn(
        scope = viewModelScope,
        started = SharingStarted.WhileSubscribed(5000),
        initialValue = SyndicInboxStats()
    )

    val tickets: StateFlow<List<Ticket>> = combine(
        ticketRepository.tickets,
        _currentFilter
    ) { allTickets, filter ->
        when (filter) {
            TicketFilter.All -> allTickets
            TicketFilter.NewSent -> allTickets.filter { it.status == TicketStatus.SENT }
            TicketFilter.Claims -> allTickets.filter { it.type == TicketType.CLAIM }
            TicketFilter.Proposals -> allTickets.filter { it.type == TicketType.PROPOSAL }
            TicketFilter.DirectMessages -> allTickets.filter { it.type == TicketType.MESSAGE }
            TicketFilter.InProgress -> allTickets.filter { it.status == TicketStatus.IN_PROGRESS }
            TicketFilter.Resolved -> allTickets.filter { it.status == TicketStatus.RESOLVED }
        }
    }.stateIn(
        scope = viewModelScope,
        started = SharingStarted.WhileSubscribed(5000),
        initialValue = emptyList()
    )

    val selectedTicket: StateFlow<Ticket?> = combine(
        ticketRepository.tickets,
        _selectedTicketId
    ) { allTickets, id ->
        allTickets.find { it.id == id }
    }.stateIn(
        scope = viewModelScope,
        started = SharingStarted.WhileSubscribed(5000),
        initialValue = null
    )

    val responseInput: StateFlow<String> = _responseInput.asStateFlow()

    fun setFilter(filter: TicketFilter) {
        _currentFilter.value = filter
    }

    fun selectTicket(ticket: Ticket?) {
        _selectedTicketId.value = ticket?.id
        _responseInput.value = ticket?.syndicResponse ?: ""
    }

    fun updateStatus(ticketId: String, newStatus: TicketStatus, context: Context? = null) {
        ticketRepository.updateTicketStatus(ticketId, newStatus, context = context)
    }

    fun onResponseInputChanged(text: String) {
        _responseInput.value = text
    }

    fun submitSyndicResponse(ticketId: String, newStatus: TicketStatus? = null, context: Context? = null) {
        val current = ticketRepository.getTicketById(ticketId) ?: return
        val targetStatus = newStatus ?: current.status
        ticketRepository.updateTicketStatus(ticketId, targetStatus, _responseInput.value.trim(), context = context)
    }

    fun deleteTicket(ticketId: String) {
        ticketRepository.deleteTicket(ticketId)
        if (_selectedTicketId.value == ticketId) {
            _selectedTicketId.value = null
        }
    }

    fun clearAllTickets() {
        ticketRepository.clearAllTickets()
        _selectedTicketId.value = null
    }
}
