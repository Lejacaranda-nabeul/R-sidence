package com.lajacaranda.residence.ui.screens.ticket

import androidx.lifecycle.ViewModel
import com.lajacaranda.residence.data.model.TicketCategory
import com.lajacaranda.residence.data.model.TicketType
import com.lajacaranda.residence.data.repository.AuthRepository
import com.lajacaranda.residence.data.repository.TicketRepository
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow

data class CreateTicketUiState(
    val type: TicketType = TicketType.CLAIM,
    val selectedCategory: TicketCategory = TicketCategory.OTHER,
    val description: String = "",
    val whatsappNumber: String = "",
    val imageUri: String? = null,
    val descriptionError: String? = null,
    val whatsappError: String? = null,
    val isSubmittedSuccessfully: Boolean = false
)

class CreateTicketViewModel(
    private val authRepository: AuthRepository = AuthRepository.instance,
    private val ticketRepository: TicketRepository = TicketRepository.instance
) : ViewModel() {

    private val _uiState = MutableStateFlow(CreateTicketUiState())
    val uiState: StateFlow<CreateTicketUiState> = _uiState.asStateFlow()

    fun setInitialType(typeString: String?) {
        val type = when (typeString?.lowercase()) {
            "proposal" -> TicketType.PROPOSAL
            "message" -> TicketType.MESSAGE
            else -> TicketType.CLAIM
        }
        _uiState.value = _uiState.value.copy(type = type)
    }

    fun onTypeSelected(type: TicketType) {
        _uiState.value = _uiState.value.copy(type = type)
    }

    fun onCategorySelected(category: TicketCategory) {
        _uiState.value = _uiState.value.copy(selectedCategory = category)
    }

    fun onDescriptionChanged(text: String) {
        _uiState.value = _uiState.value.copy(
            description = text,
            descriptionError = null
        )
    }

    fun onImageSelected(uri: String?) {
        _uiState.value = _uiState.value.copy(imageUri = uri)
    }

    fun onWhatsappChanged(number: String) {
        _uiState.value = _uiState.value.copy(
            whatsappNumber = number,
            whatsappError = null
        )
    }

    fun submitTicket(): Boolean {
        val state = _uiState.value
        if (state.description.trim().length < 10) {
            _uiState.value = _uiState.value.copy(
                descriptionError = "Veuillez fournir une description plus détaillée (au moins 10 caractères)."
            )
            return false
        }

        val whatsappInput = state.whatsappNumber.trim()
        if (whatsappInput.isEmpty()) {
            _uiState.value = _uiState.value.copy(
                whatsappError = "Veuillez entrer votre numéro WhatsApp pour être contacté."
            )
            return false
        }

        val user = authRepository.currentUser.value
        val apptCode = user?.apartmentCode ?: "A32"

        ticketRepository.addTicket(
            apartmentCode = apptCode,
            whatsappNumber = whatsappInput,
            type = state.type,
            category = state.selectedCategory,
            description = state.description.trim(),
            imageUri = state.imageUri
        )

        _uiState.value = _uiState.value.copy(isSubmittedSuccessfully = true)
        return true
    }

    fun resetSubmission() {
        _uiState.value = CreateTicketUiState()
    }
}
