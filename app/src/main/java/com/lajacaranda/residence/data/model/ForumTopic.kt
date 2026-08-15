package com.lajacaranda.residence.data.model

enum class SyndicRole(val title: String) {
    PRESIDENT("Président du Syndic"),
    TREASURER("Trésorier"),
    SECRETARY("Secrétaire"),
    MEMBER("Membre du Conseil")
}

data class SyndicMember(
    val id: String,
    val name: String,
    val role: SyndicRole,
    val apartmentCode: String
)

data class ForumComment(
    val id: String,
    val authorName: String,
    val authorRole: SyndicRole,
    val text: String,
    val timestamp: Long = System.currentTimeMillis()
)

data class ForumTopic(
    val id: String,
    val authorName: String,
    val authorRole: SyndicRole,
    val title: String,
    val description: String,
    val category: String,
    val votesPour: Int = 0,
    val votesContre: Int = 0,
    val comments: List<ForumComment> = emptyList(),
    val timestamp: Long = System.currentTimeMillis()
)
