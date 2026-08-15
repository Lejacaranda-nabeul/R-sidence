package com.lajacaranda.residence.ui.screens.syndic

import android.content.Intent
import android.net.Uri
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.DeleteSweep
import androidx.compose.material.icons.filled.Forum
import androidx.compose.material.icons.filled.Inbox
import androidx.compose.material.icons.filled.MarkEmailUnread
import androidx.compose.material.icons.filled.Payments
import androidx.compose.material.icons.filled.Phone
import androidx.compose.material.icons.filled.PictureAsPdf
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.Badge
import androidx.compose.material3.BadgedBox
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Scaffold
import androidx.compose.material3.ScrollableTabRow
import androidx.compose.material3.Surface
import androidx.compose.material3.Tab
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.viewmodel.compose.viewModel
import com.lajacaranda.residence.data.model.Ticket
import com.lajacaranda.residence.data.model.TicketStatus
import com.lajacaranda.residence.data.model.TicketType
import com.lajacaranda.residence.ui.components.LanguageSelectorButton
import com.lajacaranda.residence.ui.components.StatusChip
import com.lajacaranda.residence.ui.components.StatusOptionButton
import com.lajacaranda.residence.ui.components.SyndicTicketCard
import com.lajacaranda.residence.ui.theme.EmeraldPrimary
import com.lajacaranda.residence.ui.theme.TerracottaSecondary
import com.lajacaranda.residence.util.PdfExporter

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun SyndicAdminScreen(
    onBack: () -> Unit,
    onNavigateToForum: () -> Unit = {},
    onNavigateToBroadcast: () -> Unit = {},
    viewModel: SyndicViewModel = viewModel()
) {
    val tickets by viewModel.tickets.collectAsState()
    val stats by viewModel.stats.collectAsState()
    val selectedTicket by viewModel.selectedTicket.collectAsState()
    val responseText by viewModel.responseInput.collectAsState()
    val context = LocalContext.current

    var selectedTabIndex by remember { mutableStateOf(0) }
    var showClearTicketsDialog by remember { mutableStateOf(false) }
    val tabs = listOf(
        "Toutes (${stats.totalCount})",
        "Nouveaux (${stats.newCount})",
        "Réclamations (${stats.claimsCount})",
        "Propositions (${stats.proposalsCount})",
        "Messages (${stats.messagesCount})",
        "En cours (${stats.inProgressCount})",
        "Traitées (${stats.resolvedCount})"
    )

    fun onTabSelected(index: Int) {
        selectedTabIndex = index
        when (index) {
            0 -> viewModel.setFilter(TicketFilter.All)
            1 -> viewModel.setFilter(TicketFilter.NewSent)
            2 -> viewModel.setFilter(TicketFilter.Claims)
            3 -> viewModel.setFilter(TicketFilter.Proposals)
            4 -> viewModel.setFilter(TicketFilter.DirectMessages)
            5 -> viewModel.setFilter(TicketFilter.InProgress)
            6 -> viewModel.setFilter(TicketFilter.Resolved)
        }
    }

    if (selectedTicket != null) {
        val ticket = selectedTicket!!
        AlertDialog(
            onDismissRequest = { viewModel.selectTicket(null) },
            title = {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text(
                        text = "Appartement ${ticket.apartmentCode}",
                        style = MaterialTheme.typography.titleMedium,
                        fontWeight = FontWeight.Bold
                    )
                    StatusChip(status = ticket.status)
                }
            },
            text = {
                Column(
                    modifier = Modifier.fillMaxWidth(),
                    verticalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    Row {
                        Text(
                            text = when (ticket.type) {
                                TicketType.CLAIM -> "Réclamation"
                                TicketType.PROPOSAL -> "Proposition"
                                TicketType.MESSAGE -> "Message Direct"
                            },
                            fontWeight = FontWeight.Bold,
                            color = when (ticket.type) {
                                TicketType.CLAIM -> TerracottaSecondary
                                TicketType.PROPOSAL -> EmeraldPrimary
                                TicketType.MESSAGE -> MaterialTheme.colorScheme.tertiary
                            }
                        )
                        Text(text = " • Catégorie: ${ticket.category.label}")
                    }

                    Text(
                        text = ticket.description,
                        style = MaterialTheme.typography.bodyMedium
                    )

                    Text(
                        text = "Changer le statut :",
                        style = MaterialTheme.typography.labelMedium,
                        fontWeight = FontWeight.Bold
                    )

                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.spacedBy(6.dp)
                    ) {
                        StatusOptionButton(
                            label = "Envoyé",
                            isSelected = ticket.status == TicketStatus.SENT,
                            onClick = { viewModel.updateStatus(ticket.id, TicketStatus.SENT, context = context) },
                            modifier = Modifier.weight(1f)
                        )
                        StatusOptionButton(
                            label = "En cours",
                            isSelected = ticket.status == TicketStatus.IN_PROGRESS,
                            onClick = { viewModel.updateStatus(ticket.id, TicketStatus.IN_PROGRESS, context = context) },
                            modifier = Modifier.weight(1f)
                        )
                        StatusOptionButton(
                            label = "Traité",
                            isSelected = ticket.status == TicketStatus.RESOLVED,
                            onClick = { viewModel.updateStatus(ticket.id, TicketStatus.RESOLVED, context = context) },
                            modifier = Modifier.weight(1f)
                        )
                    }

                    OutlinedTextField(
                        value = responseText,
                        onValueChange = { viewModel.onResponseInputChanged(it) },
                        label = { Text("Réponse du syndic") },
                        placeholder = { Text("Information ou délai d'intervention...") },
                        modifier = Modifier.fillMaxWidth(),
                        shape = RoundedCornerShape(12.dp)
                    )

                    if (ticket.whatsappNumber.isNotBlank()) {
                        Card(
                            shape = RoundedCornerShape(10.dp),
                            colors = CardDefaults.cardColors(
                                containerColor = EmeraldPrimary.copy(alpha = 0.08f)
                            )
                        ) {
                            Row(
                                modifier = Modifier
                                    .fillMaxWidth()
                                    .padding(horizontal = 12.dp, vertical = 8.dp),
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                Icon(
                                    Icons.Default.Phone,
                                    contentDescription = null,
                                    tint = EmeraldPrimary,
                                    modifier = Modifier.size(16.dp)
                                )
                                Spacer(modifier = Modifier.width(8.dp))
                                Column {
                                    Text(
                                        text = "WhatsApp résident",
                                        style = MaterialTheme.typography.labelSmall,
                                        color = EmeraldPrimary.copy(alpha = 0.7f)
                                    )
                                    Text(
                                        text = ticket.whatsappNumber,
                                        style = MaterialTheme.typography.bodyMedium,
                                        fontWeight = FontWeight.Bold,
                                        color = EmeraldPrimary
                                    )
                                }
                            }
                        }

                        OutlinedButton(
                            onClick = {
                                viewModel.deleteTicket(ticket.id)
                            },
                            modifier = Modifier.fillMaxWidth(),
                            shape = RoundedCornerShape(12.dp),
                            colors = ButtonDefaults.outlinedButtonColors(contentColor = TerracottaSecondary)
                        ) {
                            Icon(Icons.Default.DeleteSweep, contentDescription = null, tint = TerracottaSecondary)
                            Spacer(modifier = Modifier.width(6.dp))
                            Text("Supprimer ce ticket")
                        }
                    }
                }
            },
            confirmButton = {
                Button(
                    onClick = {
                        viewModel.submitSyndicResponse(ticket.id, context = context)
                        viewModel.selectTicket(null)
                    },
                    colors = ButtonDefaults.buttonColors(containerColor = EmeraldPrimary)
                ) {
                    Text("Enregistrer & Notifier")
                }
            },
            dismissButton = {
                TextButton(onClick = { viewModel.selectTicket(null) }) {
                    Text("Fermer")
                }
            }
        )
    }

    if (showClearTicketsDialog) {
        AlertDialog(
            onDismissRequest = { showClearTicketsDialog = false },
            icon = { Icon(Icons.Default.DeleteSweep, contentDescription = null, tint = TerracottaSecondary, modifier = Modifier.size(54.dp)) },
            title = { Text("Vider la boîte de réception ?", fontWeight = FontWeight.Bold) },
            text = { Text("Cette action supprimera définitivement tous les tickets, réclamations et propositions enregistrés.") },
            confirmButton = {
                Button(
                    onClick = {
                        viewModel.clearAllTickets()
                        showClearTicketsDialog = false
                    },
                    colors = ButtonDefaults.buttonColors(containerColor = TerracottaSecondary)
                ) {
                    Text("Oui, vider tous les tickets")
                }
            },
            dismissButton = {
                TextButton(onClick = { showClearTicketsDialog = false }) {
                    Text("Annuler")
                }
            }
        )
    }

    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        BadgedBox(
                            badge = {
                                if (stats.newCount > 0) {
                                    Badge(containerColor = TerracottaSecondary) {
                                        Text("${stats.newCount}", color = Color.White)
                                    }
                                }
                            }
                        ) {
                            Icon(
                                Icons.Default.Inbox,
                                contentDescription = null,
                                tint = EmeraldPrimary,
                                modifier = Modifier.size(28.dp)
                            )
                        }
                        Spacer(modifier = Modifier.width(10.dp))
                        Column {
                            Text("Boîte de Réception Syndic", fontWeight = FontWeight.Bold)
                            Text(
                                "Réclamations & propositions des résidents",
                                style = MaterialTheme.typography.labelSmall,
                                color = TerracottaSecondary
                            )
                        }
                    }
                },
                actions = {
                    LanguageSelectorButton()
                    IconButton(onClick = {
                        PdfExporter.generateAndShareTicketReport(
                            context = context,
                            apartmentCode = "RÉSIDENCE-GLOBAL",
                            tickets = tickets,
                            reportTitle = "Rapport Global Syndic - La Jacaranda"
                        )
                    }) {
                        Icon(Icons.Default.PictureAsPdf, contentDescription = "Rapport PDF Syndic", tint = TerracottaSecondary)
                    }
                    if (tickets.isNotEmpty()) {
                        IconButton(onClick = { showClearTicketsDialog = true }) {
                            Icon(Icons.Default.DeleteSweep, contentDescription = "Vider la boîte", tint = TerracottaSecondary)
                        }
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(containerColor = MaterialTheme.colorScheme.surface)
            )
        }
    ) { paddingValues ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
                .background(MaterialTheme.colorScheme.background)
        ) {
            // Quick Access Cards to Forum & Broadcast Center
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp, vertical = 10.dp),
                horizontalArrangement = Arrangement.spacedBy(10.dp)
            ) {
                Card(
                    modifier = Modifier
                        .weight(1f)
                        .clickable { onNavigateToBroadcast() },
                    shape = RoundedCornerShape(14.dp),
                    colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.secondaryContainer)
                ) {
                    Row(
                        modifier = Modifier.padding(12.dp),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Icon(Icons.Default.Payments, contentDescription = null, tint = TerracottaSecondary)
                        Spacer(modifier = Modifier.width(8.dp))
                        Column {
                            Text("Envoyer Annonce", fontWeight = FontWeight.Bold, fontSize = 13.sp, color = MaterialTheme.colorScheme.onSecondaryContainer)
                            Text("Aux résidents", fontSize = 10.sp, color = MaterialTheme.colorScheme.onSecondaryContainer.copy(alpha = 0.7f))
                        }
                    }
                }

                Card(
                    modifier = Modifier
                        .weight(1f)
                        .clickable { onNavigateToForum() },
                    shape = RoundedCornerShape(14.dp),
                    colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.primaryContainer)
                ) {
                    Row(
                        modifier = Modifier.padding(12.dp),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Icon(Icons.Default.Forum, contentDescription = null, tint = EmeraldPrimary)
                        Spacer(modifier = Modifier.width(8.dp))
                        Column {
                            Text("Forum Conseil", fontWeight = FontWeight.Bold, fontSize = 13.sp, color = MaterialTheme.colorScheme.onPrimaryContainer)
                            Text("Espace bureau", fontSize = 10.sp, color = MaterialTheme.colorScheme.onPrimaryContainer.copy(alpha = 0.7f))
                        }
                    }
                }
            }

            ScrollableTabRow(
                selectedTabIndex = selectedTabIndex,
                edgePadding = 16.dp,
                containerColor = MaterialTheme.colorScheme.surface
            ) {
                tabs.forEachIndexed { index, title ->
                    Tab(
                        selected = selectedTabIndex == index,
                        onClick = { onTabSelected(index) },
                        text = {
                            Text(
                                text = title,
                                fontWeight = if (selectedTabIndex == index) FontWeight.Bold else FontWeight.Normal,
                                color = if (selectedTabIndex == index) EmeraldPrimary else MaterialTheme.colorScheme.onSurface.copy(alpha = 0.7f)
                            )
                        }
                    )
                }
            }

            if (tickets.isEmpty()) {
                Box(
                    modifier = Modifier.fillMaxSize(),
                    contentAlignment = Alignment.Center
                ) {
                    Column(horizontalAlignment = Alignment.CenterHorizontally) {
                        Icon(
                            Icons.Default.MarkEmailUnread,
                            contentDescription = null,
                            tint = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.3f),
                            modifier = Modifier.size(48.dp)
                        )
                        Spacer(modifier = Modifier.height(10.dp))
                        Text(
                            text = "Aucun message dans cette catégorie.",
                            style = MaterialTheme.typography.bodyMedium,
                            color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.5f)
                        )
                    }
                }
            } else {
                LazyColumn(
                    modifier = Modifier
                        .fillMaxSize()
                        .padding(16.dp),
                    verticalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    items(tickets) { ticket ->
                        SyndicTicketCard(
                            ticket = ticket,
                            onClick = { viewModel.selectTicket(ticket) }
                        )
                    }
                }
            }
        }
    }
}
