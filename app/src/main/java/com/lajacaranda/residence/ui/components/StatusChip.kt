package com.lajacaranda.residence.ui.components

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.lajacaranda.residence.data.model.TicketStatus
import com.lajacaranda.residence.ui.theme.StatusInProgressBg
import com.lajacaranda.residence.ui.theme.StatusInProgressText
import com.lajacaranda.residence.ui.theme.StatusResolvedBg
import com.lajacaranda.residence.ui.theme.StatusResolvedText
import com.lajacaranda.residence.ui.theme.StatusSentBg
import com.lajacaranda.residence.ui.theme.StatusSentText

@Composable
fun StatusChip(
    status: TicketStatus,
    modifier: Modifier = Modifier
) {
    val (bgColor, textColor) = when (status) {
        TicketStatus.SENT -> Pair(StatusSentBg, StatusSentText)
        TicketStatus.IN_PROGRESS -> Pair(StatusInProgressBg, StatusInProgressText)
        TicketStatus.RESOLVED -> Pair(StatusResolvedBg, StatusResolvedText)
    }

    Box(
        modifier = modifier
            .clip(RoundedCornerShape(20.dp))
            .background(bgColor)
            .padding(horizontal = 10.dp, vertical = 4.dp)
    ) {
        Row(verticalAlignment = Alignment.CenterVertically) {
            Box(
                modifier = Modifier
                    .size(8.dp)
                    .clip(CircleShape)
                    .background(textColor)
            )
            Spacer(modifier = Modifier.width(6.dp))
            Text(
                text = status.localized(),
                color = textColor,
                fontSize = 12.sp,
                fontWeight = FontWeight.SemiBold
            )
        }
    }
}
