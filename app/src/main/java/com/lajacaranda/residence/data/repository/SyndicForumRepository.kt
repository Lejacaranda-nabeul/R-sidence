package com.lajacaranda.residence.data.repository

import com.lajacaranda.residence.data.local.LocalSharedDataManager
import com.lajacaranda.residence.data.model.ForumComment
import com.lajacaranda.residence.data.model.ForumTopic
import com.lajacaranda.residence.data.model.SyndicRole
import com.lajacaranda.residence.data.remote.supabase.SupabaseRepository
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import java.util.UUID

class SyndicForumRepository(
    private val supabaseRepository: SupabaseRepository = SupabaseRepository.instance
) {

    private val _topics = MutableStateFlow<List<ForumTopic>>(LocalSharedDataManager.loadForumTopics())
    val topics: StateFlow<List<ForumTopic>> = _topics.asStateFlow()

    init {
        CoroutineScope(Dispatchers.IO).launch {
            while (true) {
                delay(3500)
                try {
                    val cloudTopics = supabaseRepository.fetchForumTopicsFromSupabase()
                    if (cloudTopics != null && cloudTopics.isNotEmpty()) {
                        if (cloudTopics != _topics.value) {
                            _topics.value = cloudTopics
                            LocalSharedDataManager.saveForumTopics(cloudTopics)
                        }
                    } else {
                        val loaded = LocalSharedDataManager.loadForumTopics()
                        if (loaded != _topics.value) {
                            _topics.value = loaded
                        }
                    }
                } catch (e: Exception) {
                    // Ignore
                }
            }
        }
    }

    fun createTopic(
        authorName: String,
        authorRole: SyndicRole,
        title: String,
        description: String,
        category: String
    ): ForumTopic {
        val newTopic = ForumTopic(
            id = "TOPIC-" + UUID.randomUUID().toString().take(6).uppercase(),
            authorName = authorName,
            authorRole = authorRole,
            title = title,
            description = description,
            category = category,
            votesPour = 1,
            votesContre = 0,
            timestamp = System.currentTimeMillis()
        )
        val updated = listOf(newTopic) + _topics.value
        _topics.value = updated
        LocalSharedDataManager.saveForumTopics(updated)

        // Supabase Cloud Push
        CoroutineScope(Dispatchers.IO).launch {
            supabaseRepository.pushForumTopicToSupabase(newTopic)
        }

        return newTopic
    }

    fun voteOnTopic(topicId: String, isPour: Boolean) {
        var updatedTopic: ForumTopic? = null
        val updated = _topics.value.map { topic ->
            if (topic.id == topicId) {
                val newPour = if (isPour) topic.votesPour + 1 else topic.votesPour
                val newContre = if (!isPour) topic.votesContre + 1 else topic.votesContre
                val topicUpdated = topic.copy(votesPour = newPour, votesContre = newContre)
                updatedTopic = topicUpdated
                topicUpdated
            } else {
                topic
            }
        }
        _topics.value = updated
        LocalSharedDataManager.saveForumTopics(updated)

        updatedTopic?.let { t ->
            CoroutineScope(Dispatchers.IO).launch {
                supabaseRepository.updateTopicVotesInSupabase(t.id, t.votesPour, t.votesContre)
            }
        }
    }

    fun addComment(
        topicId: String,
        authorName: String,
        authorRole: SyndicRole,
        commentText: String
    ) {
        val newComment = ForumComment(
            id = "COMM-" + UUID.randomUUID().toString().take(6).uppercase(),
            authorName = authorName,
            authorRole = authorRole,
            text = commentText.trim(),
            timestamp = System.currentTimeMillis()
        )
        val updated = _topics.value.map { topic ->
            if (topic.id == topicId) {
                topic.copy(comments = topic.comments + newComment)
            } else {
                topic
            }
        }
        _topics.value = updated
        LocalSharedDataManager.saveForumTopics(updated)

        // Supabase Cloud Comment Push
        CoroutineScope(Dispatchers.IO).launch {
            supabaseRepository.pushCommentToSupabase(topicId, newComment)
        }
    }

    companion object {
        val instance by lazy { SyndicForumRepository() }
    }
}


