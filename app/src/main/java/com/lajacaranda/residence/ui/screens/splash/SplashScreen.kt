package com.lajacaranda.residence.ui.screens.splash

import androidx.compose.animation.core.Animatable
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.draw.scale
import androidx.compose.ui.unit.dp
import com.lajacaranda.residence.data.repository.AuthRepository
import com.lajacaranda.residence.ui.components.JacarandaLogo
import kotlinx.coroutines.delay

@Composable
fun SplashScreen(
    onNavigateToNext: (String) -> Unit
) {
    val scale = remember { Animatable(0.6f) }
    val alpha = remember { Animatable(0f) }

    LaunchedEffect(key1 = true) {
        scale.animateTo(
            targetValue = 1f,
            animationSpec = tween(durationMillis = 800)
        )
        alpha.animateTo(
            targetValue = 1f,
            animationSpec = tween(durationMillis = 600)
        )
        delay(1200)

        val currentUser = AuthRepository.instance.currentUser.value
        if (currentUser != null) {
            onNavigateToNext("dashboard")
        } else {
            onNavigateToNext("auth")
        }
    }

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(MaterialTheme.colorScheme.background),
        contentAlignment = Alignment.Center
    ) {
        JacarandaLogo(
            modifier = Modifier
                .scale(scale.value)
                .alpha(alpha.value),
            size = 140.dp,
            showTitle = true
        )
    }
}
