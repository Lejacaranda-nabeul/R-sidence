package com.lajacaranda.residence.service

import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import android.os.Build
import androidx.core.app.NotificationCompat
import com.lajacaranda.residence.MainActivity

class JacarandaMessagingService {

    fun onNewToken(token: String) {
        // Token push FCM généré pour cet appareil
        // Enregistrement possible dans Firestore pour cibler le membre de la résidence
    }

    fun handleIncomingPush(context: Context, title: String?, body: String?) {
        val channelId = "jacaranda_fcm_channel"
        val notificationManager = context.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val channel = NotificationChannel(
                channelId,
                "Notifications Push Firebase",
                NotificationManager.IMPORTANCE_HIGH
            )
            notificationManager.createNotificationChannel(channel)
        }

        val intent = Intent(context, MainActivity::class.java)
        val pendingIntent = PendingIntent.getActivity(context, 0, intent, PendingIntent.FLAG_IMMUTABLE)

        val notification = NotificationCompat.Builder(context, channelId)
            .setSmallIcon(android.R.drawable.ic_popup_reminder)
            .setContentTitle(title ?: "Résidence La Jacaranda")
            .setContentText(body ?: "Une nouvelle mise à jour est disponible.")
            .setContentIntent(pendingIntent)
            .setAutoCancel(true)
            .build()

        notificationManager.notify(System.currentTimeMillis().toInt(), notification)
    }
}
