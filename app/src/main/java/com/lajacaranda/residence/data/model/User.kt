package com.lajacaranda.residence.data.model

enum class UserRole {
    RESIDENT,
    SYNDIC
}

data class User(
    val apartmentCode: String,
    val whatsappNumber: String,
    val role: UserRole = UserRole.RESIDENT,
    val building: String = extractBuilding(apartmentCode),
    val floor: Int = extractFloor(apartmentCode),
    val apartmentNumber: Int = extractApartmentNumber(apartmentCode)
) {
    companion object {
        // Regex to validate apartment format: A-D + 1-5 + 1-5
        private val APARTMENT_REGEX = Regex("^[A-Da-d][1-5][1-5]$")

        fun isValidApartmentCode(code: String): Boolean {
            return APARTMENT_REGEX.matches(code.trim())
        }

        fun extractBuilding(code: String): String {
            return if (isValidApartmentCode(code)) code.trim().uppercase().take(1) else ""
        }

        fun extractFloor(code: String): Int {
            return if (isValidApartmentCode(code)) code.trim().substring(1, 2).toIntOrNull() ?: 0 else 0
        }

        fun extractApartmentNumber(code: String): Int {
            return if (isValidApartmentCode(code)) code.trim().substring(2, 3).toIntOrNull() ?: 0 else 0
        }
    }
}
