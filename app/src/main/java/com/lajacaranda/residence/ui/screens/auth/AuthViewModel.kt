package com.lajacaranda.residence.ui.screens.auth

import androidx.lifecycle.ViewModel
import com.lajacaranda.residence.data.model.User
import com.lajacaranda.residence.data.repository.AuthRepository
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow

data class AuthUiState(
    val apartmentCode: String = "",
    val whatsappNumber: String = "",
    val apartmentError: String? = null,
    val whatsappError: String? = null,
    val liveApartmentDetails: String? = null,
    val isLoading: Boolean = false,
    val isAuthenticated: Boolean = false
)

class AuthViewModel(
    private val authRepository: AuthRepository = AuthRepository.instance
) : ViewModel() {

    private val _uiState = MutableStateFlow(AuthUiState())
    val uiState: StateFlow<AuthUiState> = _uiState.asStateFlow()

    fun onApartmentCodeChanged(code: String) {
        val uppercaseCode = code.trim().uppercase().take(3)
        val isValid = User.isValidApartmentCode(uppercaseCode)

        val details = if (isValid) {
            val b = User.extractBuilding(uppercaseCode)
            val f = User.extractFloor(uppercaseCode)
            val a = User.extractApartmentNumber(uppercaseCode)
            "Bâtiment $b • Étage $f • Appartement $a"
        } else if (uppercaseCode.length == 3) {
            "Format invalide (Ex: A32 = Bâtiment A, Étage 3, Appt 2)"
        } else {
            null
        }

        _uiState.value = _uiState.value.copy(
            apartmentCode = uppercaseCode,
            apartmentError = if (uppercaseCode.length == 3 && !isValid) "Code d'appartement invalide" else null,
            liveApartmentDetails = details
        )
    }

    fun onWhatsappNumberChanged(number: String) {
        _uiState.value = _uiState.value.copy(
            whatsappNumber = number,
            whatsappError = null
        )
    }

    fun submitLogin(): Boolean {
        val state = _uiState.value
        var hasError = false

        if (!User.isValidApartmentCode(state.apartmentCode)) {
            _uiState.value = _uiState.value.copy(
                apartmentError = "Lettre A-D + 2 chiffres entre 1 et 5 (Ex: A32)"
            )
            hasError = true
        }

        if (state.whatsappNumber.isBlank()) {
            _uiState.value = _uiState.value.copy(
                whatsappError = "Le numéro WhatsApp est obligatoire"
            )
            hasError = true
        }

        if (hasError) return false

        val success = authRepository.login(state.apartmentCode, state.whatsappNumber)
        if (success) {
            _uiState.value = _uiState.value.copy(isAuthenticated = true)
        }
        return success
    }

    fun fillDemoResident() {
        onApartmentCodeChanged("A32")
        onWhatsappNumberChanged("+21629112233")
    }
}
