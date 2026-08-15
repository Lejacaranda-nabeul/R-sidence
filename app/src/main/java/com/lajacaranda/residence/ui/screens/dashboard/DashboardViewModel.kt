package com.lajacaranda.residence.ui.screens.dashboard

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.lajacaranda.residence.data.model.Ticket
import com.lajacaranda.residence.data.model.TicketStatus
import com.lajacaranda.residence.data.model.User
import com.lajacaranda.residence.data.repository.AuthRepository
import com.lajacaranda.residence.data.repository.TicketRepository
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.combine
import kotlinx.coroutines.flow.stateIn

data class DashboardUiState(
    val user: User? = null,
    val recentTickets: List<Ticket> = emptyList(),
    val totalTicketsCount: Int = 0,
    val inProgressCount: Int = 0,
    val resolvedCount: Int = 0
)

class DashboardViewModel(
    private val authRepository: AuthRepository = AuthRepository.instance,
    private val ticketRepository: TicketRepository = TicketRepository.instance
) : ViewModel() {

    val uiState: StateFlow<DashboardUiState> = combine(
        authRepository.currentUser,
        ticketRepository.tickets
    ) { currentUser, allTickets ->
        val apptCode = currentUser?.apartmentCode ?: "A32"
        val userTickets = allTickets.filter { it.apartmentCode.equals(apptCode, ignoreCase = true) }

        DashboardUiState(
            user = currentUser,
            recentTickets = userTickets.take(5),
            totalTicketsCount = userTickets.size,
            inProgressCount = userTickets.count { it.status == TicketStatus.IN_PROGRESS },
            resolvedCount = userTickets.count { it.status == TicketStatus.RESOLVED }
        )
    }.stateIn(
        scope = viewModelScope,
        started = SharingStarted.WhileSubscribed(5000),
        initialValue = DashboardUiState()
    )

    fun logout() {
        authRepository.logout()
    }
}
