package com.lajacaranda.residence.ui.navigation

import androidx.compose.runtime.Composable
import androidx.navigation.NavHostController
import androidx.navigation.NavType
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.navArgument
import com.lajacaranda.residence.ui.screens.auth.AuthScreen
import com.lajacaranda.residence.ui.screens.dashboard.DashboardScreen
import com.lajacaranda.residence.ui.screens.history.TicketHistoryScreen
import com.lajacaranda.residence.ui.screens.splash.SplashScreen
import com.lajacaranda.residence.ui.screens.syndic.BroadcastCenterScreen
import com.lajacaranda.residence.ui.screens.syndic.SyndicAdminScreen
import com.lajacaranda.residence.ui.screens.syndic.SyndicForumScreen
import com.lajacaranda.residence.ui.screens.ticket.CreateTicketScreen

@Composable
fun AppNavGraph(
    navController: NavHostController,
    startDestination: String = Screen.Splash.route
) {
    NavHost(
        navController = navController,
        startDestination = startDestination
    ) {
        composable(Screen.Splash.route) {
            SplashScreen(
                onNavigateToNext = { route ->
                    navController.navigate(route) {
                        popUpTo(Screen.Splash.route) { inclusive = true }
                    }
                }
            )
        }

        composable(Screen.Auth.route) {
            AuthScreen(
                onLoginSuccess = {
                    navController.navigate(Screen.Dashboard.route) {
                        popUpTo(Screen.Auth.route) { inclusive = true }
                    }
                }
            )
        }

        composable(Screen.Dashboard.route) {
            DashboardScreen(
                onNavigateToCreateTicket = { type ->
                    navController.navigate(Screen.CreateTicket.createRoute(type))
                },
                onNavigateToHistory = {
                    navController.navigate(Screen.History.route)
                },
                onLogout = {
                    navController.navigate(Screen.Auth.route) {
                        popUpTo(Screen.Dashboard.route) { inclusive = true }
                    }
                }
            )
        }

        composable(
            route = Screen.CreateTicket.route,
            arguments = listOf(navArgument("type") { type = NavType.StringType })
        ) { backStackEntry ->
            val typeParam = backStackEntry.arguments?.getString("type")
            CreateTicketScreen(
                typeParam = typeParam,
                onBack = { navController.popBackStack() },
                onNavigateToHistory = {
                    navController.navigate(Screen.History.route) {
                        popUpTo(Screen.Dashboard.route)
                    }
                }
            )
        }

        composable(Screen.History.route) {
            TicketHistoryScreen(
                onBack = { navController.popBackStack() }
            )
        }

        composable(Screen.SyndicAdmin.route) {
            SyndicAdminScreen(
                onBack = { navController.popBackStack() },
                onNavigateToForum = {
                    navController.navigate(Screen.SyndicForum.route)
                },
                onNavigateToBroadcast = {
                    navController.navigate(Screen.BroadcastCenter.route)
                }
            )
        }

        composable(Screen.BroadcastCenter.route) {
            BroadcastCenterScreen(
                onBack = { navController.popBackStack() }
            )
        }

        composable(Screen.SyndicForum.route) {
            SyndicForumScreen(
                onBack = { navController.popBackStack() }
            )
        }
    }
}
