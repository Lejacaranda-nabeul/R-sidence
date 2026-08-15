package com.lajacaranda.residence.ui.navigation

sealed class Screen(val route: String) {
    object Splash : Screen("splash")
    object Auth : Screen("auth")
    object Dashboard : Screen("dashboard")
    object CreateTicket : Screen("create_ticket/{type}") {
        fun createRoute(type: String) = "create_ticket/$type"
    }
    object History : Screen("history")
    object SyndicAdmin : Screen("syndic_admin")
    object BroadcastCenter : Screen("broadcast_center")
    object SyndicForum : Screen("syndic_forum")
}
