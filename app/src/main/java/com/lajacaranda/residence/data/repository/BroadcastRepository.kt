package com.lajacaranda.residence.data.repository

import android.content.Context
import com.lajacaranda.residence.data.local.LocalSharedDataManager
import com.lajacaranda.residence.data.model.BroadcastMessage
import com.lajacaranda.residence.data.model.BroadcastTarget
import com.lajacaranda.residence.data.model.BroadcastType
import com.lajacaranda.residence.data.remote.supabase.SupabaseRepository
import com.lajacaranda.residence.util.NotificationHelper
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import java.util.UUID


class BroadcastRepository(
    private val supabaseRepository: SupabaseRepository = SupabaseRepository.instance
) {

    private val _messages = MutableStateFlow<List<BroadcastMessage>>(LocalSharedDataManager.loadBroadcasts())
    val messages: StateFlow<List<BroadcastMessage>> = _messages.asStateFlow()

    init {
        CoroutineScope(Dispatchers.IO).launch {
            while (true) {
                delay(3000)
                try {
                    val localBroadcasts = LocalSharedDataManager.loadBroadcasts()
                    val cloudBroadcasts = supabaseRepository.fetchBroadcastsFromSupabase()

                    val broadcastMap = LinkedHashMap<String, BroadcastMessage>()
                    for (b in localBroadcasts) {
                        broadcastMap[b.id] = b
                    }
                    if (cloudBroadcasts != null) {
                        for (b in cloudBroadcasts) {
                            broadcastMap[b.id] = b
                        }
                    }

                    val mergedList = broadcastMap.values.sortedByDescending { it.timestamp }
                    if (mergedList != _messages.value) {
                        _messages.value = mergedList
                        LocalSharedDataManager.saveBroadcasts(mergedList)
                    }

                    if (cloudBroadcasts != null && cloudBroadcasts.isNotEmpty()) {
                        val cloudIds = cloudBroadcasts.map { it.id }.toSet()
                        for (localB in localBroadcasts) {
                            if (localB.id !in cloudIds) {
                                supabaseRepository.pushBroadcastToSupabase(localB)
                            }
                        }
                    }
                } catch (e: Exception) {
                    // Ignore
                }
            }
        }
    }

    fun sendBroadcast(
        title: String,
        content: String,
        type: BroadcastType,
        target: BroadcastTarget,
        targetApartmentCode: String? = null,
        senderTitle: String = "Bureau du Syndic",
        context: Context? = null
    ): BroadcastMessage {
        val newMessage = BroadcastMessage(
            id = "MSG-" + UUID.randomUUID().toString().take(6).uppercase(),
            title = title,
            content = content,
            type = type,
            target = target,
            targetApartmentCode = targetApartmentCode,
            senderTitle = senderTitle,
            timestamp = System.currentTimeMillis()
        )
        val updated = listOf(newMessage) + _messages.value
        _messages.value = updated
        LocalSharedDataManager.saveBroadcasts(updated)

        // Supabase Cloud Push
        CoroutineScope(Dispatchers.IO).launch {
            supabaseRepository.pushBroadcastToSupabase(newMessage)
        }

        // Trigger local Push Notification simulation if context provided
        context?.let { ctx ->
            NotificationHelper.createNotificationChannel(ctx)
        }

        return newMessage
    }

    fun getMessagesForResident(apartmentCode: String): List<BroadcastMessage> {
        val building = apartmentCode.take(1).uppercase()
        return _messages.value.filter { msg ->
            when (msg.target) {
                BroadcastTarget.ALL -> true
                BroadcastTarget.BUILDING_A -> building == "A"
                BroadcastTarget.BUILDING_B -> building == "B"
                BroadcastTarget.BUILDING_C -> building == "C"
                BroadcastTarget.BUILDING_D -> building == "D"
                BroadcastTarget.SPECIFIC_APARTMENT -> msg.targetApartmentCode.equals(apartmentCode, ignoreCase = true)
            }
        }
    }

    fun deleteBroadcast(id: String) {
        val updated = _messages.value.filter { it.id != id }
        _messages.value = updated
        LocalSharedDataManager.saveBroadcasts(updated)
        CoroutineScope(Dispatchers.IO).launch {
            supabaseRepository.deleteBroadcastFromSupabase(id)
        }
    }

    fun clearAllBroadcasts() {
        _messages.value = emptyList()
        LocalSharedDataManager.clearAllBroadcasts()
        CoroutineScope(Dispatchers.IO).launch {
            supabaseRepository.clearAllBroadcastsFromSupabase()
        }
    }

    companion object {
        val instance by lazy { BroadcastRepository() }
    }
}

