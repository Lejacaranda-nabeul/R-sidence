package com.lajacaranda.residence.data.model

import androidx.compose.runtime.Composable
import androidx.compose.ui.res.stringResource
import com.lajacaranda.residence.R

enum class TicketType(val label: String) {
    CLAIM("Réclamation"),
    PROPOSAL("Proposition"),
    MESSAGE("Message Direct");

    @Composable
    fun localized(): String = when (this) {
        CLAIM -> stringResource(R.string.type_claim_label)
        PROPOSAL -> stringResource(R.string.type_proposal_label)
        MESSAGE -> stringResource(R.string.type_claim_label)
    }
}

enum class TicketCategory(val label: String, val iconName: String) {
    ELEVATOR("Ascenseur", "Elevator"),
    WATER("Eau / Plomberie", "WaterDrop"),
    ELECTRICITY("Électricité", "Bolt"),
    CLEANLINESS("Propreté", "CleaningServices"),
    SECURITY("Sécurité", "Shield"),
    OTHER("Autre", "MoreHoriz");

    @Composable
    fun localized(): String = when (this) {
        ELEVATOR -> stringResource(R.string.cat_elevator)
        WATER -> stringResource(R.string.cat_plumbing)
        ELECTRICITY -> stringResource(R.string.cat_electricity)
        CLEANLINESS -> stringResource(R.string.cat_cleaning)
        SECURITY -> stringResource(R.string.cat_security)
        OTHER -> stringResource(R.string.cat_other)
    }
}

enum class TicketStatus(val label: String) {
    SENT("Envoyé"),
    IN_PROGRESS("En cours"),
    RESOLVED("Traité");

    @Composable
    fun localized(): String = when (this) {
        SENT -> stringResource(R.string.status_new)
        IN_PROGRESS -> stringResource(R.string.status_in_progress)
        RESOLVED -> stringResource(R.string.status_resolved)
    }
}

data class Ticket(
    val id: String,
    val apartmentCode: String,
    val whatsappNumber: String,
    val type: TicketType,
    val category: TicketCategory = TicketCategory.OTHER,
    val description: String,
    val imageUri: String? = null,
    val status: TicketStatus = TicketStatus.SENT,
    val syndicResponse: String? = null,
    val timestamp: Long = System.currentTimeMillis()
)
