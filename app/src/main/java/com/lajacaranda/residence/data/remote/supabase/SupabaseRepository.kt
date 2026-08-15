package com.lajacaranda.residence.data.remote.supabase

import android.util.Log
import com.lajacaranda.residence.data.model.BroadcastMessage
import com.lajacaranda.residence.data.model.BroadcastTarget
import com.lajacaranda.residence.data.model.BroadcastType
import com.lajacaranda.residence.data.model.ForumComment
import com.lajacaranda.residence.data.model.ForumTopic
import com.lajacaranda.residence.data.model.SyndicRole
import com.lajacaranda.residence.data.model.Ticket
import com.lajacaranda.residence.data.model.TicketCategory
import com.lajacaranda.residence.data.model.TicketStatus
import com.lajacaranda.residence.data.model.TicketType
import com.lajacaranda.residence.data.model.User
import com.lajacaranda.residence.data.model.UserRole
import org.json.JSONArray
import org.json.JSONObject
import java.text.SimpleDateFormat
import java.util.Locale
import java.util.TimeZone

class SupabaseRepository {

    // Convertit un horodatage ISO 8601 Supabase (ex: "2026-08-07T10:30:00+00:00") en Long millis.
    // Si le parsing échoue, retourne l'heure actuelle comme fallback.
    private fun parseSupabaseTimestamp(raw: String?): Long {
        if (raw.isNullOrBlank()) return System.currentTimeMillis()
        val formats = listOf(
            "yyyy-MM-dd'T'HH:mm:ss.SSSSSSXXX",
            "yyyy-MM-dd'T'HH:mm:ssXXX",
            "yyyy-MM-dd'T'HH:mm:ss'Z'",
            "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'"
        )
        for (fmt in formats) {
            try {
                val sdf = SimpleDateFormat(fmt, Locale.US).apply {
                    timeZone = TimeZone.getTimeZone("UTC")
                }
                return sdf.parse(raw)?.time ?: continue
            } catch (_: Exception) {}
        }
        return System.currentTimeMillis()
    }

    // ================= TICKETS =================
    suspend fun fetchTicketsFromSupabase(): List<Ticket>? {
        val jsonString = SupabaseClientManager.get("tickets", "?select=*&order=created_at.desc") ?: return null
        return try {
            val jsonArray = JSONArray(jsonString)
            val list = mutableListOf<Ticket>()
            for (i in 0 until jsonArray.length()) {
                val obj = jsonArray.getJSONObject(i)
                list.add(
                    Ticket(
                        id = obj.getString("id"),
                        apartmentCode = obj.getString("apartment_code"),
                        whatsappNumber = obj.optString("whatsapp_number", ""),
                        type = try { TicketType.valueOf(obj.getString("type")) } catch (e: Exception) { TicketType.CLAIM },
                        category = try { TicketCategory.valueOf(obj.getString("category")) } catch (e: Exception) { TicketCategory.OTHER },
                        description = obj.getString("description"),
                        imageUri = if (obj.has("image_uri") && !obj.isNull("image_uri")) obj.getString("image_uri") else null,
                        status = try { TicketStatus.valueOf(obj.getString("status")) } catch (e: Exception) { TicketStatus.SENT },
                        syndicResponse = if (obj.has("syndic_response") && !obj.isNull("syndic_response")) obj.getString("syndic_response") else null,
                        timestamp = parseSupabaseTimestamp(if (obj.has("created_at") && !obj.isNull("created_at")) obj.getString("created_at") else null)
                    )
                )
            }
            list
        } catch (e: Exception) {
            Log.e(TAG, "Error parsing tickets from Supabase: ${e.message}")
            null
        }
    }

    suspend fun pushTicketToSupabase(ticket: Ticket): Boolean {
        val json = JSONObject().apply {
            put("id", ticket.id)
            put("apartment_code", ticket.apartmentCode)
            put("whatsapp_number", ticket.whatsappNumber)
            put("type", ticket.type.name)
            put("category", ticket.category.name)
            put("description", ticket.description)
            put("image_uri", ticket.imageUri ?: JSONObject.NULL)
            put("status", ticket.status.name)
            put("syndic_response", ticket.syndicResponse ?: JSONObject.NULL)
        }
        return SupabaseClientManager.upsert("tickets", json.toString())
    }

    suspend fun updateTicketStatusInSupabase(ticketId: String, status: TicketStatus, responseText: String?): Boolean {
        val json = JSONObject().apply {
            put("status", status.name)
            if (responseText != null) {
                put("syndic_response", responseText)
            }
        }
        return SupabaseClientManager.patch("tickets", "id=eq.$ticketId", json.toString())
    }

    // ================= BROADCASTS =================
    suspend fun fetchBroadcastsFromSupabase(): List<BroadcastMessage>? {
        val jsonString = SupabaseClientManager.get("broadcast_messages", "?select=*&order=created_at.desc") ?: return null
        return try {
            val jsonArray = JSONArray(jsonString)
            val list = mutableListOf<BroadcastMessage>()
            for (i in 0 until jsonArray.length()) {
                val obj = jsonArray.getJSONObject(i)
                list.add(
                    BroadcastMessage(
                        id = obj.getString("id"),
                        title = obj.getString("title"),
                        content = obj.getString("content"),
                        type = try { BroadcastType.valueOf(obj.getString("type")) } catch (e: Exception) { BroadcastType.GENERAL_INFO },
                        target = try { BroadcastTarget.valueOf(obj.getString("target")) } catch (e: Exception) { BroadcastTarget.ALL },
                        targetApartmentCode = if (obj.has("target_apartment_code") && !obj.isNull("target_apartment_code")) obj.getString("target_apartment_code") else null,
                        senderTitle = obj.optString("sender_title", "Bureau du Syndic"),
                        timestamp = parseSupabaseTimestamp(if (obj.has("created_at") && !obj.isNull("created_at")) obj.getString("created_at") else null)
                    )
                )
            }
            list
        } catch (e: Exception) {
            Log.e(TAG, "Error parsing broadcasts from Supabase: ${e.message}")
            null
        }
    }

    suspend fun pushBroadcastToSupabase(broadcast: BroadcastMessage): Boolean {
        val json = JSONObject().apply {
            put("id", broadcast.id)
            put("title", broadcast.title)
            put("content", broadcast.content)
            put("type", broadcast.type.name)
            put("target", broadcast.target.name)
            put("target_apartment_code", broadcast.targetApartmentCode ?: JSONObject.NULL)
            put("sender_title", broadcast.senderTitle)
        }
        return SupabaseClientManager.upsert("broadcast_messages", json.toString())
    }

    // ================= FORUM TOPICS =================
    suspend fun fetchForumTopicsFromSupabase(): List<ForumTopic>? {
        val jsonString = SupabaseClientManager.get("forum_topics", "?select=*,forum_comments(*)&order=created_at.desc") ?: return null
        return try {
            val jsonArray = JSONArray(jsonString)
            val list = mutableListOf<ForumTopic>()
            for (i in 0 until jsonArray.length()) {
                val obj = jsonArray.getJSONObject(i)
                val commentsArray = obj.optJSONArray("forum_comments") ?: JSONArray()
                val commentsList = mutableListOf<ForumComment>()
                for (j in 0 until commentsArray.length()) {
                    val cObj = commentsArray.getJSONObject(j)
                    commentsList.add(
                        ForumComment(
                            id = cObj.getString("id"),
                            authorName = cObj.getString("author_name"),
                            authorRole = try { SyndicRole.valueOf(cObj.getString("author_role")) } catch (e: Exception) { SyndicRole.MEMBER },
                            text = cObj.getString("text"),
                            timestamp = parseSupabaseTimestamp(if (cObj.has("created_at") && !cObj.isNull("created_at")) cObj.getString("created_at") else null)
                        )
                    )
                }

                list.add(
                    ForumTopic(
                        id = obj.getString("id"),
                        authorName = obj.getString("author_name"),
                        authorRole = try { SyndicRole.valueOf(obj.getString("author_role")) } catch (e: Exception) { SyndicRole.MEMBER },
                        title = obj.getString("title"),
                        description = obj.getString("description"),
                        category = obj.optString("category", "Général"),
                        votesPour = obj.optInt("votes_pour", 0),
                        votesContre = obj.optInt("votes_contre", 0),
                        comments = commentsList,
                        timestamp = parseSupabaseTimestamp(if (obj.has("created_at") && !obj.isNull("created_at")) obj.getString("created_at") else null)
                    )
                )
            }
            list
        } catch (e: Exception) {
            Log.e(TAG, "Error parsing forum topics from Supabase: ${e.message}")
            null
        }
    }

    suspend fun pushForumTopicToSupabase(topic: ForumTopic): Boolean {
        val json = JSONObject().apply {
            put("id", topic.id)
            put("author_name", topic.authorName)
            put("author_role", topic.authorRole.name)
            put("title", topic.title)
            put("description", topic.description)
            put("category", topic.category)
            put("votes_pour", topic.votesPour)
            put("votes_contre", topic.votesContre)
        }
        return SupabaseClientManager.post("forum_topics", json.toString())
    }

    suspend fun updateTopicVotesInSupabase(topicId: String, pour: Int, contre: Int): Boolean {
        val json = JSONObject().apply {
            put("votes_pour", pour)
            put("votes_contre", contre)
        }
        return SupabaseClientManager.patch("forum_topics", "id=eq.$topicId", json.toString())
    }

    suspend fun pushCommentToSupabase(topicId: String, comment: ForumComment): Boolean {
        val json = JSONObject().apply {
            put("id", comment.id)
            put("topic_id", topicId)
            put("author_name", comment.authorName)
            put("author_role", comment.authorRole.name)
            put("text", comment.text)
        }
        return SupabaseClientManager.post("forum_comments", json.toString())
    }

    // ================= DELETE & CLEAR METHODS =================
    suspend fun deleteBroadcastFromSupabase(id: String): Boolean {
        return SupabaseClientManager.delete("broadcast_messages", "id=eq.$id")
    }

    suspend fun clearAllBroadcastsFromSupabase(): Boolean {
        return SupabaseClientManager.delete("broadcast_messages", "id=neq.00000000-0000-0000-0000-000000000000")
    }

    suspend fun deleteTicketFromSupabase(id: String): Boolean {
        return SupabaseClientManager.delete("tickets", "id=eq.$id")
    }

    suspend fun clearAllTicketsFromSupabase(): Boolean {
        return SupabaseClientManager.delete("tickets", "id=neq.00000000-0000-0000-0000-000000000000")
    }

    companion object {
        private const val TAG = "SupabaseRepository"
        val instance by lazy { SupabaseRepository() }
    }
}
