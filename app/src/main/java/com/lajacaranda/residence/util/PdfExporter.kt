package com.lajacaranda.residence.util

import android.content.Context
import android.content.Intent
import android.graphics.Canvas
import android.graphics.Color
import android.graphics.Paint
import android.graphics.Typeface
import android.graphics.pdf.PdfDocument
import android.net.Uri
import androidx.core.content.FileProvider
import com.lajacaranda.residence.data.model.Ticket
import com.lajacaranda.residence.data.model.TicketType
import java.io.File
import java.io.FileOutputStream
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale

object PdfExporter {

    fun generateAndShareTicketReport(
        context: Context,
        apartmentCode: String,
        tickets: List<Ticket>,
        reportTitle: String = "Rapport des Réclamations & Propositions"
    ): File? {
        val pdfDocument = PdfDocument()
        val pageInfo = PdfDocument.PageInfo.Builder(595, 842, 1).create() // A4 page size in points (72 dpi)
        val page = pdfDocument.startPage(pageInfo)
        val canvas: Canvas = page.canvas

        val paint = Paint()
        val titlePaint = Paint()
        val headerBgPaint = Paint()
        val textPaint = Paint()

        // Page Background
        canvas.drawColor(Color.parseColor("#FBFBFA"))

        // Header Background Banner (Emerald Green #0D6E57)
        headerBgPaint.color = Color.parseColor("#0D6E57")
        canvas.drawRect(0f, 0f, 595f, 110f, headerBgPaint)

        // Header Title (White)
        titlePaint.color = Color.WHITE
        titlePaint.textSize = 22f
        titlePaint.typeface = Typeface.create(Typeface.DEFAULT, Typeface.BOLD)
        canvas.drawText("LA JACARANDA", 40f, 45f, titlePaint)

        titlePaint.textSize = 12f
        titlePaint.typeface = Typeface.create(Typeface.DEFAULT, Typeface.NORMAL)
        canvas.drawText("RÉSIDENCE DE STANDING • SYNDICAT DES COPROPRIÉTAIRES", 40f, 65f, titlePaint)
        canvas.drawText("Document Officiel de Suivi", 40f, 85f, titlePaint)

        // Subheader Report Info
        textPaint.color = Color.parseColor("#002118")
        textPaint.textSize = 14f
        textPaint.typeface = Typeface.create(Typeface.DEFAULT, Typeface.BOLD)
        canvas.drawText(reportTitle, 40f, 140f, textPaint)

        val formatter = SimpleDateFormat("dd/MM/yyyy à HH:mm", Locale.FRANCE)
        val currentDate = formatter.format(Date())

        textPaint.textSize = 10f
        textPaint.typeface = Typeface.create(Typeface.DEFAULT, Typeface.NORMAL)
        textPaint.color = Color.DKGRAY
        canvas.drawText("Généré le : $currentDate", 40f, 158f, textPaint)
        canvas.drawText("Concerne : Appartement $apartmentCode (${tickets.size} demande(s))", 40f, 172f, textPaint)

        // Divider Line (Terracotta #D95D39)
        paint.color = Color.parseColor("#D95D39")
        paint.strokeWidth = 2f
        canvas.drawLine(40f, 185f, 555f, 185f, paint)

        // Tickets List Table
        var yPosition = 210f
        val lineSpacing = 65f

        if (tickets.isEmpty()) {
            canvas.drawText("Aucune réclamation ou proposition enregistrée.", 40f, yPosition, textPaint)
        } else {
            tickets.take(8).forEachIndexed { index, ticket ->
                // Ticket Box Card
                val cardBg = Paint().apply {
                    color = Color.WHITE
                    style = Paint.Style.FILL
                }
                val cardBorder = Paint().apply {
                    color = Color.parseColor("#E0E0E0")
                    style = Paint.Style.STROKE
                    strokeWidth = 1f
                }
                canvas.drawRect(40f, yPosition - 15f, 555f, yPosition + 40f, cardBg)
                canvas.drawRect(40f, yPosition - 15f, 555f, yPosition + 40f, cardBorder)

                // Ticket Type Accent Indicator
                val accentPaint = Paint().apply {
                    color = if (ticket.type == TicketType.CLAIM) Color.parseColor("#D95D39") else Color.parseColor("#0D6E57")
                }
                canvas.drawRect(40f, yPosition - 15f, 46f, yPosition + 40f, accentPaint)

                // Item Text Content
                val boldText = Paint().apply {
                    color = Color.BLACK
                    textSize = 11f
                    typeface = Typeface.create(Typeface.DEFAULT, Typeface.BOLD)
                }
                val bodyText = Paint().apply {
                    color = Color.DKGRAY
                    textSize = 9.5f
                    typeface = Typeface.create(Typeface.DEFAULT, Typeface.NORMAL)
                }

                val typeLabel = if (ticket.type == TicketType.CLAIM) "[Réclamation]" else "[Proposition]"
                val dateLabel = SimpleDateFormat("dd/MM/yy", Locale.FRANCE).format(Date(ticket.timestamp))

                canvas.drawText("$typeLabel ${ticket.category.label} - Ref: ${ticket.id}", 55f, yPosition, boldText)
                canvas.drawText("Statut: ${ticket.status.label} • Date: $dateLabel", 380f, yPosition, boldText)

                val shortDesc = if (ticket.description.length > 65) ticket.description.take(62) + "..." else ticket.description
                canvas.drawText(shortDesc, 55f, yPosition + 16f, bodyText)

                if (!ticket.syndicResponse.isNullOrBlank()) {
                    val respDesc = if (ticket.syndicResponse.length > 60) ticket.syndicResponse.take(57) + "..." else ticket.syndicResponse
                    canvas.drawText("Réponse Syndic: $respDesc", 55f, yPosition + 30f, bodyText)
                }

                yPosition += lineSpacing
            }
        }

        // Footer Sign-off
        val footerPaint = Paint().apply {
            color = Color.GRAY
            textSize = 9f
            typeface = Typeface.create(Typeface.DEFAULT, Typeface.ITALIC)
        }
        canvas.drawText("Résidence La Jacaranda — Ce rapport fait foi de communication officielle auprès du syndic.", 40f, 800f, footerPaint)

        pdfDocument.finishPage(page)

        // Save PDF to cache/storage
        val file = File(context.cacheDir, "Rapport_Jacaranda_${apartmentCode}_${System.currentTimeMillis()}.pdf")
        try {
            pdfDocument.writeTo(FileOutputStream(file))
            pdfDocument.close()

            // Open Share Sheet Intent
            val contentUri: Uri = FileProvider.getUriForFile(context, "${context.packageName}.fileprovider", file)
            val shareIntent = Intent(Intent.ACTION_SEND).apply {
                type = "application/pdf"
                putExtra(Intent.EXTRA_STREAM, contentUri)
                addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
            }
            context.startActivity(Intent.createChooser(shareIntent, "Partager le rapport PDF La Jacaranda"))
            return file
        } catch (e: Exception) {
            e.printStackTrace()
            pdfDocument.close()
            return null
        }
    }
}
