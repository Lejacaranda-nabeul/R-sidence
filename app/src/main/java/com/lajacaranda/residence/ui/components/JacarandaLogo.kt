package com.lajacaranda.residence.ui.components

import androidx.compose.foundation.Canvas
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.size
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.lajacaranda.residence.ui.theme.EmeraldPrimary
import com.lajacaranda.residence.ui.theme.TerracottaSecondary

@Composable
fun JacarandaLogo(
    modifier: Modifier = Modifier,
    size: Dp = 100.dp,
    showTitle: Boolean = true
) {
    Column(
        modifier = modifier,
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Canvas(modifier = Modifier.size(size)) {
            val width = size.toPx()
            val height = size.toPx()
            val center = Offset(width / 2f, height / 2f)

            // Draw Building Arch (Terracotta)
            val archPath = Path().apply {
                moveTo(width * 0.2f, height * 0.85f)
                lineTo(width * 0.2f, height * 0.45f)
                cubicTo(
                    width * 0.2f, height * 0.15f,
                    width * 0.8f, height * 0.15f,
                    width * 0.8f, height * 0.45f
                )
                lineTo(width * 0.8f, height * 0.85f)
            }
            drawPath(
                path = archPath,
                color = TerracottaSecondary,
                style = Stroke(width = width * 0.08f)
            )

            // Draw Jacaranda Leaf/Crown (Emerald Green)
            val leafPath = Path().apply {
                moveTo(width * 0.5f, height * 0.25f)
                cubicTo(
                    width * 0.3f, height * 0.35f,
                    width * 0.3f, height * 0.65f,
                    width * 0.5f, height * 0.75f
                )
                cubicTo(
                    width * 0.7f, height * 0.65f,
                    width * 0.7f, height * 0.35f,
                    width * 0.5f, height * 0.25f
                )
            }
            drawPath(
                path = leafPath,
                color = EmeraldPrimary
            )

            // Central Vertical Accent
            drawLine(
                color = Color.White,
                start = Offset(width * 0.5f, height * 0.3f),
                end = Offset(width * 0.5f, height * 0.7f),
                strokeWidth = width * 0.04f
            )
        }

        if (showTitle) {
            Spacer(modifier = Modifier.height(12.dp))
            Text(
                text = "LA JACARANDA",
                style = MaterialTheme.typography.titleLarge,
                fontWeight = FontWeight.Bold,
                letterSpacing = 3.sp,
                color = EmeraldPrimary
            )
            Text(
                text = "RÉSIDENCE DE STANDING",
                style = MaterialTheme.typography.labelMedium,
                letterSpacing = 1.5.sp,
                color = TerracottaSecondary
            )
        }
    }
}
