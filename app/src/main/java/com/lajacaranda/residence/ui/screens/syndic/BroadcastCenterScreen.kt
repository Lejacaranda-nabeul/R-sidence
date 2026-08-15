package com.lajacaranda.residence.ui.screens.syndic

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.ExperimentalLayoutApi
import androidx.compose.foundation.layout.FlowRow
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
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.CheckCircle
import androidx.compose.material.icons.filled.Delete
import androidx.compose.material.icons.filled.DeleteSweep
import androidx.compose.material.icons.filled.NotificationsActive
import androidx.compose.material.icons.filled.Payments
import androidx.compose.material.icons.automirrored.filled.Send
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.FilterChip
import androidx.compose.material3.FilterChipDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.OutlinedTextFieldDefaults
import androidx.compose.material3.Scaffold
import androidx.compose.material3.ScrollableTabRow
import androidx.compose.material3.Tab
import androidx.compose.material3.Text
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
import com.lajacaranda.residence.data.model.BroadcastMessage
import com.lajacaranda.residence.data.model.BroadcastTarget
import com.lajacaranda.residence.data.model.BroadcastType
import com.lajacaranda.residence.ui.components.LanguageSelectorButton
import com.lajacaranda.residence.ui.theme.EmeraldPrimary
import com.lajacaranda.residence.ui.theme.TerracottaSecondary
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale

@OptIn(ExperimentalMaterial3Api::class, ExperimentalLayoutApi::class)
@Composable
fun BroadcastCenterScreen(
    onBack: () -> Unit,
    viewModel: BroadcastViewModel = viewModel()
) {
    val uiState by viewModel.uiState.collectAsState()
    val sentBroadcasts by viewModel.sentBroadcasts.collectAsState()
    val context = LocalContext.current
    val scrollState = rememberScrollState()

    var selectedTabIndex by remember { mutableStateOf(0) }
    var showClearConfirmDialog by remember { mutableStateOf(false) }
    val tabTitles = listOf("Envoyer une Annonce", "Historique Envois")

    if (uiState.isSuccess) {
        AlertDialog(
            onDismissRequest = { viewModel.resetForm() },
            icon = { Icon(Icons.Default.CheckCircle, contentDescription = null, tint = EmeraldPrimary, modifier = Modifier.size(54.dp)) },
            title = { Text("Annonce envoyée !", fontWeight = FontWeight.Bold) },
            text = { Text("Votre notification/rappel de cotisation a été transmis instantanément aux résidents ciblés.") },
            confirmButton = {
                Button(
                    onClick = {
                        viewModel.resetForm()
                        selectedTabIndex = 1
                    },
                    colors = ButtonDefaults.buttonColors(containerColor = EmeraldPrimary)
                ) {
                    Text("Voir l'historique")
                }
            }
        )
    }

    if (showClearConfirmDialog) {
        AlertDialog(
            onDismissRequest = { showClearConfirmDialog = false },
            icon = { Icon(Icons.Default.DeleteSweep, contentDescription = null, tint = TerracottaSecondary, modifier = Modifier.size(54.dp)) },
            title = { Text("Vider tous les anciens messages ?", fontWeight = FontWeight.Bold) },
            text = { Text("Cette action supprimera définitivement tout l'historique des annonces et rappels diffusés.") },
            confirmButton = {
                Button(
                    onClick = {
                        viewModel.clearAllBroadcasts()
                        showClearConfirmDialog = false
                    },
                    colors = ButtonDefaults.buttonColors(containerColor = TerracottaSecondary)
                ) {
                    Text("Oui, vider l'historique")
                }
            },
            dismissButton = {
                androidx.compose.material3.TextButton(onClick = { showClearConfirmDialog = false }) {
                    Text("Annuler")
                }
            }
        )
    }

    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    Column {
                        Text("Centre de Diffusion & Rappels", fontWeight = FontWeight.Bold)
                        Text("Rappels de cotisations & Annonces résidents", style = MaterialTheme.typography.labelSmall, color = TerracottaSecondary)
                    }
                },
                navigationIcon = {
                    IconButton(onClick = onBack) {
                        Icon(Icons.Default.ArrowBack, contentDescription = "Retour")
                    }
                },
                actions = {
                    LanguageSelectorButton()
                    if (selectedTabIndex == 1 && sentBroadcasts.isNotEmpty()) {
                        IconButton(onClick = { showClearConfirmDialog = true }) {
                            Icon(Icons.Default.DeleteSweep, contentDescription = "Vider l'historique", tint = TerracottaSecondary)
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
            ScrollableTabRow(
                selectedTabIndex = selectedTabIndex,
                edgePadding = 16.dp,
                containerColor = MaterialTheme.colorScheme.surface
            ) {
                tabTitles.forEachIndexed { index, title ->
                    Tab(
                        selected = selectedTabIndex == index,
                        onClick = { selectedTabIndex = index },
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

            if (selectedTabIndex == 0) {
                Column(
                    modifier = Modifier
                        .fillMaxSize()
                        .verticalScroll(scrollState)
                        .padding(20.dp),
                    verticalArrangement = Arrangement.spacedBy(18.dp)
                ) {
                    // Type Selection Chips
                    Column {
                        Text("Type de message", style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.Bold)
                        Spacer(modifier = Modifier.height(8.dp))
                        FlowRow(
                            horizontalArrangement = Arrangement.spacedBy(8.dp),
                            verticalArrangement = Arrangement.spacedBy(8.dp)
                        ) {
                            BroadcastType.values().forEach { type ->
                                val isSelected = uiState.selectedType == type
                                FilterChip(
                                    selected = isSelected,
                                    onClick = { viewModel.onTypeSelected(type) },
                                    label = { Text(type.label) },
                                    leadingIcon = {
                                        if (type == BroadcastType.COTISATION_REMINDER) {
                                            Icon(Icons.Default.Payments, contentDescription = null, modifier = Modifier.size(16.dp))
                                        }
                                    },
                                    colors = FilterChipDefaults.filterChipColors(
                                        selectedContainerColor = if (type == BroadcastType.COTISATION_REMINDER) TerracottaSecondary else EmeraldPrimary,
                                        selectedLabelColor = Color.White
                                    )
                                )
                            }
                        }
                    }

                    // Target Selection Chips
                    Column {
                        Text("Destinataires", style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.Bold)
                        Spacer(modifier = Modifier.height(8.dp))
                        FlowRow(
                            horizontalArrangement = Arrangement.spacedBy(8.dp),
                            verticalArrangement = Arrangement.spacedBy(8.dp)
                        ) {
                            BroadcastTarget.values().forEach { target ->
                                val isSelected = uiState.selectedTarget == target
                                FilterChip(
                                    selected = isSelected,
                                    onClick = { viewModel.onTargetSelected(target) },
                                    label = { Text(target.label) },
                                    colors = FilterChipDefaults.filterChipColors(
                                        selectedContainerColor = EmeraldPrimary,
                                        selectedLabelColor = Color.White
                                    )
                                )
                            }
                        }
                    }

                    if (uiState.selectedTarget == BroadcastTarget.SPECIFIC_APARTMENT) {
                        OutlinedTextField(
                            value = uiState.targetApartmentCode,
                            onValueChange = { viewModel.onTargetApartmentCodeChanged(it) },
                            label = { Text("Code Appartement Cible (ex: A32)") },
                            placeholder = { Text("Ex: A32") },
                            modifier = Modifier.fillMaxWidth(),
                            shape = RoundedCornerShape(12.dp)
                        )
                    }

                    // Sender Role Title Field
                    OutlinedTextField(
                        value = uiState.senderTitle,
                        onValueChange = { viewModel.onSenderTitleChanged(it) },
                        label = { Text("Titre de l'expéditeur") },
                        placeholder = { Text("Ex: Trésorier du Syndic") },
                        modifier = Modifier.fillMaxWidth(),
                        shape = RoundedCornerShape(12.dp)
                    )

                    // Title Input
                    OutlinedTextField(
                        value = uiState.title,
                        onValueChange = { viewModel.onTitleChanged(it) },
                        label = { Text("Titre de l'annonce / rappel") },
                        modifier = Modifier.fillMaxWidth(),
                        shape = RoundedCornerShape(12.dp)
                    )

                    // Content Input
                    OutlinedTextField(
                        value = uiState.content,
                        onValueChange = { viewModel.onContentChanged(it) },
                        label = { Text("Contenu du message") },
                        placeholder = { Text("Entrez les détails du rappel de cotisation ou de l'annonce...") },
                        modifier = Modifier
                            .fillMaxWidth()
                            .height(130.dp),
                        shape = RoundedCornerShape(12.dp),
                        isError = uiState.errorMessage != null,
                        supportingText = {
                            if (uiState.errorMessage != null) {
                                Text(uiState.errorMessage!!, color = MaterialTheme.colorScheme.error)
                            }
                        }
                    )

                    // Submit Button
                    Button(
                        onClick = { viewModel.sendBroadcast(context) },
                        modifier = Modifier
                            .fillMaxWidth()
                            .height(52.dp),
                        shape = RoundedCornerShape(16.dp),
                        colors = ButtonDefaults.buttonColors(
                            containerColor = if (uiState.selectedType == BroadcastType.COTISATION_REMINDER) TerracottaSecondary else EmeraldPrimary
                        )
                    ) {
                        Icon(Icons.AutoMirrored.Filled.Send, contentDescription = null)
                        Spacer(modifier = Modifier.width(8.dp))
                        Text("Diffuser la notification", style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.Bold)
                    }
                }
            } else {
                LazyColumn(
                    modifier = Modifier
                        .fillMaxSize()
                        .padding(16.dp),
                    verticalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    item {
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween,
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Text(
                                text = "${sentBroadcasts.size} message(s) envoyé(s)",
                                style = MaterialTheme.typography.titleSmall,
                                fontWeight = FontWeight.Bold,
                                color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.7f)
                            )
                            androidx.compose.material3.TextButton(
                                onClick = { showClearConfirmDialog = true }
                            ) {
                                Icon(Icons.Default.DeleteSweep, contentDescription = null, tint = TerracottaSecondary, modifier = Modifier.size(18.dp))
                                Spacer(modifier = Modifier.width(4.dp))
                                Text("Vider tout", color = TerracottaSecondary, fontWeight = FontWeight.Bold)
                            }
                        }
                    }
                    items(sentBroadcasts, key = { it.id }) { msg ->
                        BroadcastItemCard(
                            message = msg,
                            onDelete = { viewModel.deleteBroadcast(msg.id) }
                        )
                    }
                }
            }
        }
    }
}

@Composable
fun BroadcastItemCard(
    message: BroadcastMessage,
    onDelete: () -> Unit = {}
) {
    val formatter = SimpleDateFormat("dd MMM yyyy à HH:mm", Locale.FRANCE)
    val dateStr = formatter.format(Date(message.timestamp))

    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = RoundedCornerShape(16.dp),
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
        elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    text = message.type.label,
                    style = MaterialTheme.typography.labelMedium,
                    fontWeight = FontWeight.Bold,
                    color = if (message.type == BroadcastType.COTISATION_REMINDER) TerracottaSecondary else EmeraldPrimary
                )
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Text(
                        text = "Cible: ${message.target.label}${if (message.targetApartmentCode != null) " (${message.targetApartmentCode})" else ""}",
                        style = MaterialTheme.typography.labelSmall,
                        color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.6f)
                    )
                    Spacer(modifier = Modifier.width(6.dp))
                    IconButton(
                        onClick = onDelete,
                        modifier = Modifier.size(24.dp)
                    ) {
                        Icon(
                            imageVector = Icons.Default.Delete,
                            contentDescription = "Supprimer le message",
                            tint = TerracottaSecondary.copy(alpha = 0.7f),
                            modifier = Modifier.size(18.dp)
                        )
                    }
                }
            }

            Spacer(modifier = Modifier.height(6.dp))

            Text(
                text = message.title,
                style = MaterialTheme.typography.titleMedium,
                fontWeight = FontWeight.Bold,
                color = MaterialTheme.colorScheme.onSurface
            )

            Spacer(modifier = Modifier.height(4.dp))

            Text(
                text = message.content,
                style = MaterialTheme.typography.bodyMedium,
                color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.8f)
            )

            Spacer(modifier = Modifier.height(10.dp))

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Text(text = "De: ${message.senderTitle}", style = MaterialTheme.typography.labelSmall, color = EmeraldPrimary)
                Text(text = dateStr, style = MaterialTheme.typography.labelSmall, color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.5f))
            }
        }
    }
}
