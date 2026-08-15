package com.lajacaranda.residence.ui.screens.syndic

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.lajacaranda.residence.data.model.ForumTopic
import com.lajacaranda.residence.data.model.SyndicRole
import com.lajacaranda.residence.data.repository.SyndicForumRepository
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.stateIn

data class ForumUiState(
    val newTopicTitle: String = "",
    val newTopicDesc: String = "",
    val selectedCategory: String = "Travaux & Entretien",
    val commentInputText: String = "",
    val selectedTopic: ForumTopic? = null,
    val isCreateModalOpen: Boolean = false
)

class SyndicForumViewModel(
    private val forumRepository: SyndicForumRepository = SyndicForumRepository.instance
) : ViewModel() {

    val topics: StateFlow<List<ForumTopic>> = forumRepository.topics.stateIn(
        scope = viewModelScope,
        started = SharingStarted.WhileSubscribed(5000),
        initialValue = emptyList()
    )

    private val _uiState = MutableStateFlow(ForumUiState())
    val uiState: StateFlow<ForumUiState> = _uiState.asStateFlow()

    fun onTitleChanged(text: String) {
        _uiState.value = _uiState.value.copy(newTopicTitle = text)
    }

    fun onDescChanged(text: String) {
        _uiState.value = _uiState.value.copy(newTopicDesc = text)
    }

    fun onCategorySelected(cat: String) {
        _uiState.value = _uiState.value.copy(selectedCategory = cat)
    }

    fun onCommentInputChanged(text: String) {
        _uiState.value = _uiState.value.copy(commentInputText = text)
    }

    fun selectTopic(topic: ForumTopic?) {
        _uiState.value = _uiState.value.copy(selectedTopic = topic, commentInputText = "")
    }

    fun toggleCreateModal(open: Boolean) {
        _uiState.value = _uiState.value.copy(isCreateModalOpen = open)
    }

    fun createTopic(authorName: String = "Conseil Syndical", authorRole: SyndicRole = SyndicRole.PRESIDENT): Boolean {
        val state = _uiState.value
        if (state.newTopicTitle.isBlank() || state.newTopicDesc.isBlank()) return false

        forumRepository.createTopic(
            authorName = authorName,
            authorRole = authorRole,
            title = state.newTopicTitle.trim(),
            description = state.newTopicDesc.trim(),
            category = state.selectedCategory
        )

        _uiState.value = ForumUiState()
        return true
    }

    fun voteOnTopic(topicId: String, isPour: Boolean) {
        forumRepository.voteOnTopic(topicId, isPour)
    }

    fun addComment(topicId: String, authorName: String = "Membre du Bureau", authorRole: SyndicRole = SyndicRole.TREASURER) {
        val state = _uiState.value
        if (state.commentInputText.isBlank()) return

        forumRepository.addComment(
            topicId = topicId,
            authorName = authorName,
            authorRole = authorRole,
            commentText = state.commentInputText
        )
        _uiState.value = _uiState.value.copy(commentInputText = "")
    }
}
