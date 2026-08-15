package com.lajacaranda.residence.data.model

enum class BroadcastType(val label: String) {
    COTISATION_REMINDER("Rappel de Cotisation Semestrielle"),
    GENERAL_INFO("Annonce Générale"),
    URGENT_ALERT("Alerte Urgente"),
    ASSEMBLY_NOTICE("Assemblée Générale"),
    PRIVATE_MESSAGE("Message Privé Résident")
}

enum class BroadcastTarget(val label: String) {
    ALL("Toute la Résidence"),
    BUILDING_A("Bâtiment A"),
    BUILDING_B("Bâtiment B"),
    BUILDING_C("Bâtiment C"),
    BUILDING_D("Bâtiment D"),
    SPECIFIC_APARTMENT("Appartement Spécifique")
}

data class BroadcastMessage(
    val id: String,
    val title: String,
    val content: String,
    val type: BroadcastType,
    val target: BroadcastTarget,
    val targetApartmentCode: String? = null,
    val senderTitle: String = "Bureau du Syndic",
    val timestamp: Long = System.currentTimeMillis()
)
