package com.lajacaranda.residence

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalConfiguration
import androidx.compose.ui.platform.LocalContext
import androidx.navigation.compose.rememberNavController
import com.lajacaranda.residence.ui.navigation.AppNavGraph
import com.lajacaranda.residence.ui.navigation.Screen
import com.lajacaranda.residence.ui.theme.LaJacarandaTheme
import com.lajacaranda.residence.util.LanguageManager

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        LanguageManager.init(this)
        enableEdgeToEdge()

        val isSyndicApp = packageName == "com.lajacaranda.syndic"
        val startDestination = if (isSyndicApp) Screen.SyndicAdmin.route else Screen.Splash.route

        setContent {
            val currentLang by LanguageManager.currentLanguage.collectAsState()
            val localizedContext = remember(currentLang) {
                LanguageManager.getLocalizedContext(this@MainActivity, currentLang)
            }

            CompositionLocalProvider(
                LocalContext provides localizedContext,
                LocalConfiguration provides localizedContext.resources.configuration
            ) {
                LaJacarandaTheme {
                    Surface(
                        modifier = Modifier.fillMaxSize(),
                        color = MaterialTheme.colorScheme.background
                    ) {
                        val navController = rememberNavController()
                        AppNavGraph(navController = navController, startDestination = startDestination)
                    }
                }
            }
        }
    }
}
