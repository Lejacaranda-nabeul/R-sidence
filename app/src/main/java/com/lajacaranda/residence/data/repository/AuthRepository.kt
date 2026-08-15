package com.lajacaranda.residence.data.repository

import com.lajacaranda.residence.data.model.User
import com.lajacaranda.residence.data.model.UserRole
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow

class AuthRepository {

    private val _currentUser = MutableStateFlow<User?>(null)
    val currentUser: StateFlow<User?> = _currentUser.asStateFlow()

    fun login(apartmentCode: String, whatsappNumber: String): Boolean {
        val cleanCode = apartmentCode.trim().uppercase()
        if (!User.isValidApartmentCode(cleanCode) || whatsappNumber.isBlank()) {
            return false
        }

        _currentUser.value = User(
            apartmentCode = cleanCode,
            whatsappNumber = whatsappNumber.trim(),
            role = UserRole.RESIDENT
        )
        return true
    }

    fun logout() {
        _currentUser.value = null
    }

    companion object {
        val instance by lazy { AuthRepository() }
    }
}
