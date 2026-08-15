package com.lajacaranda.residence.util

import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import android.os.Build
import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat
import com.lajacaranda.residence.MainActivity
import com.lajacaranda.residence.data.model.Ticket
import com.lajacaranda.residence.data.model.TicketStatus

object NotificationHelper {

    private const val CHANNEL_ID = "jacaranda_tickets_channel"
    private const val CHANNEL_NAME = "Mises à jour La Jacaranda"
    private const val CHANNEL_DESC = "Notifications de suivi des réclamations et propositions"

    fun createNotificationChannel(context: Context) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val importance = NotificationManager.IMPORTANCE_HIGH
            val channel = NotificationChannel(CHANNEL_ID, CHANNEL_NAME, importance).apply {
                description = CHANNEL_DESC
            }
            val notificationManager: NotificationManager =
                context.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
            notificationManager.createNotificationChannel(channel)
        }
    }

    fun sendTicketStatusNotification(context: Context, ticket: Ticket, newStatus: TicketStatus) {
        createNotificationChannel(context)

        val intent = Intent(context, MainActivity::class.java).apply {
            flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK
        }
        val pendingIntent: PendingIntent = PendingIntent.getActivity(
            context,
            0,
            intent,
            PendingIntent.FLAG_IMMUTABLE
        )

        val title = "Statut mis à jour - Appt ${ticket.apartmentCode}"
        val content = when (newStatus) {
            TicketStatus.SENT -> "Votre demande a bien été reçue par le Syndic."
            TicketStatus.IN_PROGRESS -> "Votre demande (${ticket.category.label}) est désormais EN COURS de traitement."
            TicketStatus.RESOLVED -> "Bonne nouvelle ! Votre demande (${ticket.category.label}) a été marquée TRAITÉE."
        }

        val builder = NotificationCompat.Builder(context, CHANNEL_ID)
            .setSmallIcon(android.R.drawable.ic_dialog_info)
            .setContentTitle(title)
            .setContentText(content)
            .setStyle(NotificationCompat.BigTextStyle().bigText(content))
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .setContentIntent(pendingIntent)
            .setAutoCancel(true)

        try {
            with(NotificationManagerCompat.from(context)) {
                notify(ticket.id.hashCode(), builder.build())
            }
        } catch (e: SecurityException) {
            // Permission POST_NOTIFICATIONS missing on Android 13+
        }
    }

    fun sendNewTicketAlertToSyndic(context: Context, ticket: Ticket) {
        createNotificationChannel(context)

        val intent = Intent(context, MainActivity::class.java)
        val pendingIntent = PendingIntent.getActivity(context, 0, intent, PendingIntent.FLAG_IMMUTABLE)

        val title = "Nouvelle ${if (ticket.type == com.lajacaranda.residence.data.model.TicketType.CLAIM) "Réclamation" else "Proposition"} (${ticket.apartmentCode})"
        val content = "Catégorie: ${ticket.category.label} - \"${ticket.description}\""

        val builder = NotificationCompat.Builder(context, CHANNEL_ID)
            .setSmallIcon(android.R.drawable.ic_dialog_alert)
            .setContentTitle(title)
            .setContentText(content)
            .setStyle(NotificationCompat.BigTextStyle().bigText(content))
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .setContentIntent(pendingIntent)
            .setAutoCancel(true)

        try {
            with(NotificationManagerCompat.from(context)) {
                notify(ticket.id.hashCode() + 100, builder.build())
            }
        } catch (e: SecurityException) {
            // Permission missing
        }
    }
}
