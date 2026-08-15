package com.lajacaranda.residence.data.local

import android.os.Environment
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
import org.json.JSONArray
import org.json.JSONObject
import java.io.File

object LocalSharedDataManager {

    private const val TAG = "LocalSharedDataManager"

    private fun getStorageDir(): File {
        val candidates = listOf(
            File(Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS), "LaJacarandaData"),
            File("/sdcard/Download/LaJacarandaData"),
            File("/sdcard/Android/media/com.lajacaranda.shared"),
            File(Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOCUMENTS), "LaJacarandaData"),
            File("/sdcard/Documents/LaJacarandaData"),
            File("/sdcard/LaJacarandaData")
        )

        for (dir in candidates) {
            try {
                if (!dir.exists()) {
                    dir.mkdirs()
                }
                if (dir.exists() && dir.canWrite()) {
                    return dir
                }
            } catch (e: Exception) {
                Log.e(TAG, "Error checking dir ${dir.absolutePath}: ${e.message}")
            }
        }
        val fallback = File("/sdcard/Download/LaJacarandaData")
        try { fallback.mkdirs() } catch (_: Exception) {}
        return fallback
    }

    // ================= TICKETS =================
    private fun getTicketsFile(): File = File(getStorageDir(), "tickets.json")

    fun loadTickets(): List<Ticket> {
        val file = getTicketsFile()
        if (!file.exists()) return emptyList()
        return try {
            val content = file.readText(Charsets.UTF_8)
            val jsonArray = JSONArray(content)
            val list = mutableListOf<Ticket>()
            for (i in 0 until jsonArray.length()) {
                val obj = jsonArray.getJSONObject(i)
                list.add(
                    Ticket(
                        id = obj.getString("id"),
                        apartmentCode = obj.getString("apartmentCode"),
                        whatsappNumber = obj.optString("whatsappNumber", ""),
                        type = try { TicketType.valueOf(obj.getString("type")) } catch (e: Exception) { TicketType.CLAIM },
                        category = try { TicketCategory.valueOf(obj.getString("category")) } catch (e: Exception) { TicketCategory.OTHER },
                        description = obj.getString("description"),
                        imageUri = if (obj.has("imageUri") && !obj.isNull("imageUri")) obj.getString("imageUri") else null,
                        status = try { TicketStatus.valueOf(obj.getString("status")) } catch (e: Exception) { TicketStatus.SENT },
                        syndicResponse = if (obj.has("syndicResponse") && !obj.isNull("syndicResponse")) obj.getString("syndicResponse") else null,
                        timestamp = obj.optLong("timestamp", System.currentTimeMillis())
                    )
                )
            }
            list
        } catch (e: Exception) {
            Log.e(TAG, "Error loading tickets: ${e.message}")
            emptyList()
        }
    }

    fun saveTickets(tickets: List<Ticket>) {
        try {
            val jsonArray = JSONArray()
            for (t in tickets) {
                val obj = JSONObject()
                obj.put("id", t.id)
                obj.put("apartmentCode", t.apartmentCode)
                obj.put("whatsappNumber", t.whatsappNumber)
                obj.put("type", t.type.name)
                obj.put("category", t.category.name)
                obj.put("description", t.description)
                obj.put("imageUri", t.imageUri ?: JSONObject.NULL)
                obj.put("status", t.status.name)
                obj.put("syndicResponse", t.syndicResponse ?: JSONObject.NULL)
                obj.put("timestamp", t.timestamp)
                jsonArray.put(obj)
            }
            getTicketsFile().writeText(jsonArray.toString(2), Charsets.UTF_8)
        } catch (e: Exception) {
            Log.e(TAG, "Error saving tickets: ${e.message}")
        }
    }

    // ================= BROADCASTS =================
    private fun getBroadcastsFile(): File = File(getStorageDir(), "broadcasts.json")

    fun loadBroadcasts(): List<BroadcastMessage> {
        val file = getBroadcastsFile()
        if (!file.exists()) return emptyList()
        return try {
            val content = file.readText(Charsets.UTF_8)
            val jsonArray = JSONArray(content)
            val list = mutableListOf<BroadcastMessage>()
            for (i in 0 until jsonArray.length()) {
                val obj = jsonArray.getJSONObject(i)
                list.add(
                    BroadcastMessage(
                        id = obj.getString("id"),
                        title = obj.getString("title"),
                        content = obj.getString("content"),
                        type = try { BroadcastType.valueOf(obj.getString("type")) } catch (e: Exception) { BroadcastType.COTISATION_REMINDER },
                        target = try { BroadcastTarget.valueOf(obj.getString("target")) } catch (e: Exception) { BroadcastTarget.ALL },
                        targetApartmentCode = if (obj.has("targetApartmentCode") && !obj.isNull("targetApartmentCode")) obj.getString("targetApartmentCode") else null,
                        senderTitle = obj.optString("senderTitle", "Bureau du Syndic"),
                        timestamp = obj.optLong("timestamp", System.currentTimeMillis())
                    )
                )
            }
            list
        } catch (e: Exception) {
            Log.e(TAG, "Error loading broadcasts: ${e.message}")
            emptyList()
        }
    }

    fun saveBroadcasts(messages: List<BroadcastMessage>) {
        try {
            val jsonArray = JSONArray()
            for (m in messages) {
                val obj = JSONObject()
                obj.put("id", m.id)
                obj.put("title", m.title)
                obj.put("content", m.content)
                obj.put("type", m.type.name)
                obj.put("target", m.target.name)
                obj.put("targetApartmentCode", m.targetApartmentCode ?: JSONObject.NULL)
                obj.put("senderTitle", m.senderTitle)
                obj.put("timestamp", m.timestamp)
                jsonArray.put(obj)
            }
            getBroadcastsFile().writeText(jsonArray.toString(2), Charsets.UTF_8)
        } catch (e: Exception) {
            Log.e(TAG, "Error saving broadcasts: ${e.message}")
        }
    }

    fun clearAllBroadcasts() {
        try {
            getBroadcastsFile().delete()
        } catch (e: Exception) {
            Log.e(TAG, "Error clearing broadcasts: ${e.message}")
        }
    }

    fun clearAllTickets() {
        try {
            getTicketsFile().delete()
        } catch (e: Exception) {
            Log.e(TAG, "Error clearing tickets: ${e.message}")
        }
    }

    // ================= FORUM TOPICS =================
    private fun getForumFile(): File = File(getStorageDir(), "forum_topics.json")

    fun loadForumTopics(): List<ForumTopic> {
        val file = getForumFile()
        if (!file.exists()) return emptyList()
        return try {
            val content = file.readText(Charsets.UTF_8)
            val jsonArray = JSONArray(content)
            val list = mutableListOf<ForumTopic>()
            for (i in 0 until jsonArray.length()) {
                val obj = jsonArray.getJSONObject(i)

                val commentsArray = obj.optJSONArray("comments") ?: JSONArray()
                val commentsList = mutableListOf<ForumComment>()
                for (j in 0 until commentsArray.length()) {
                    val cObj = commentsArray.getJSONObject(j)
                    commentsList.add(
                        ForumComment(
                            id = cObj.getString("id"),
                            authorName = cObj.getString("authorName"),
                            authorRole = try { SyndicRole.valueOf(cObj.getString("authorRole")) } catch (e: Exception) { SyndicRole.MEMBER },
                            text = cObj.getString("text"),
                            timestamp = cObj.optLong("timestamp", System.currentTimeMillis())
                        )
                    )
                }

                list.add(
                    ForumTopic(
                        id = obj.getString("id"),
                        authorName = obj.getString("authorName"),
                        authorRole = try { SyndicRole.valueOf(obj.getString("authorRole")) } catch (e: Exception) { SyndicRole.MEMBER },
                        title = obj.getString("title"),
                        description = obj.getString("description"),
                        category = obj.optString("category", "Général"),
                        votesPour = obj.optInt("votesPour", 0),
                        votesContre = obj.optInt("votesContre", 0),
                        comments = commentsList,
                        timestamp = obj.optLong("timestamp", System.currentTimeMillis())
                    )
                )
            }
            list
        } catch (e: Exception) {
            Log.e(TAG, "Error loading forum topics: ${e.message}")
            emptyList()
        }
    }

    fun saveForumTopics(topics: List<ForumTopic>) {
        try {
            val jsonArray = JSONArray()
            for (t in topics) {
                val obj = JSONObject()
                obj.put("id", t.id)
                obj.put("authorName", t.authorName)
                obj.put("authorRole", t.authorRole.name)
                obj.put("title", t.title)
                obj.put("description", t.description)
                obj.put("category", t.category)
                obj.put("votesPour", t.votesPour)
                obj.put("votesContre", t.votesContre)
                obj.put("timestamp", t.timestamp)

                val cArray = JSONArray()
                for (c in t.comments) {
                    val cObj = JSONObject()
                    cObj.put("id", c.id)
                    cObj.put("authorName", c.authorName)
                    cObj.put("authorRole", c.authorRole.name)
                    cObj.put("text", c.text)
                    cObj.put("timestamp", c.timestamp)
                    cArray.put(cObj)
                }
                obj.put("comments", cArray)

                jsonArray.put(obj)
            }
            getForumFile().writeText(jsonArray.toString(2), Charsets.UTF_8)
        } catch (e: Exception) {
            Log.e(TAG, "Error saving forum topics: ${e.message}")
        }
    }
}
