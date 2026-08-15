package com.lajacaranda.residence.ui.screens.syndic

import android.content.Context
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.lajacaranda.residence.data.model.BroadcastMessage
import com.lajacaranda.residence.data.model.BroadcastTarget
import com.lajacaranda.residence.data.model.BroadcastType
import com.lajacaranda.residence.data.repository.BroadcastRepository
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.stateIn

data class BroadcastUiState(
    val title: String = "",
    val content: String = "",
    val selectedType: BroadcastType = BroadcastType.COTISATION_REMINDER,
    val selectedTarget: BroadcastTarget = BroadcastTarget.ALL,
    val targetApartmentCode: String = "",
    val senderTitle: String = "Bureau du Syndic",
    val isSuccess: Boolean = false,
    val errorMessage: String? = null
)

class BroadcastViewModel(
    private val broadcastRepository: BroadcastRepository = BroadcastRepository.instance
) : ViewModel() {

    val sentBroadcasts: StateFlow<List<BroadcastMessage>> = broadcastRepository.messages.stateIn(
        scope = viewModelScope,
        started = SharingStarted.WhileSubscribed(5000),
        initialValue = emptyList()
    )

    private val _uiState = MutableStateFlow(BroadcastUiState())
    val uiState: StateFlow<BroadcastUiState> = _uiState.asStateFlow()

    fun onTitleChanged(text: String) {
        _uiState.value = _uiState.value.copy(title = text, errorMessage = null)
    }

    fun onContentChanged(text: String) {
        _uiState.value = _uiState.value.copy(content = text, errorMessage = null)
    }

    fun onTypeSelected(type: BroadcastType) {
        val defaultTitle = when (type) {
            BroadcastType.COTISATION_REMINDER -> "Rappel : Cotisation semestrielle (6 mois)"
            BroadcastType.GENERAL_INFO -> "Annonce Résidence La Jacaranda"
            BroadcastType.URGENT_ALERT -> "Alerte Travaux / Coupure"
            BroadcastType.ASSEMBLY_NOTICE -> "Convocation Assemblée Générale"
            BroadcastType.PRIVATE_MESSAGE -> "Message Privé du Syndic"
        }
        val target = if (type == BroadcastType.PRIVATE_MESSAGE) BroadcastTarget.SPECIFIC_APARTMENT else _uiState.value.selectedTarget
        _uiState.value = _uiState.value.copy(
            selectedType = type,
            selectedTarget = target,
            title = defaultTitle,
            errorMessage = null
        )
    }

    fun onTargetSelected(target: BroadcastTarget) {
        _uiState.value = _uiState.value.copy(selectedTarget = target, errorMessage = null)
    }

    fun onTargetApartmentCodeChanged(code: String) {
        _uiState.value = _uiState.value.copy(targetApartmentCode = code.uppercase().take(3))
    }

    fun onSenderTitleChanged(title: String) {
        _uiState.value = _uiState.value.copy(senderTitle = title)
    }

    fun sendBroadcast(context: Context? = null): Boolean {
        val state = _uiState.value

        if (state.title.isBlank()) {
            _uiState.value = _uiState.value.copy(errorMessage = "Le titre est obligatoire.")
            return false
        }

        if (state.content.isBlank()) {
            _uiState.value = _uiState.value.copy(errorMessage = "Le contenu de l'annonce est obligatoire.")
            return false
        }

        if (state.selectedTarget == BroadcastTarget.SPECIFIC_APARTMENT && state.targetApartmentCode.isBlank()) {
            _uiState.value = _uiState.value.copy(errorMessage = "Veuillez entrer le numéro d'appartement cible (ex: A32).")
            return false
        }

        broadcastRepository.sendBroadcast(
            title = state.title.trim(),
            content = state.content.trim(),
            type = state.selectedType,
            target = state.selectedTarget,
            targetApartmentCode = if (state.selectedTarget == BroadcastTarget.SPECIFIC_APARTMENT) state.targetApartmentCode else null,
            senderTitle = state.senderTitle,
            context = context
        )

        _uiState.value = _uiState.value.copy(isSuccess = true)
        return true
    }

    fun resetForm() {
        _uiState.value = BroadcastUiState()
    }

    fun deleteBroadcast(id: String) {
        broadcastRepository.deleteBroadcast(id)
    }

    fun clearAllBroadcasts() {
        broadcastRepository.clearAllBroadcasts()
    }
}
