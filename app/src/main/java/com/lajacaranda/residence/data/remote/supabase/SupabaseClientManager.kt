package com.lajacaranda.residence.data.remote.supabase

import android.util.Log
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import org.json.JSONArray
import org.json.JSONObject
import java.io.BufferedReader
import java.io.InputStreamReader
import java.io.OutputStreamWriter
import java.net.HttpURLConnection
import java.net.URL

object SupabaseClientManager {

    private const val TAG = "SupabaseClient"

    suspend fun get(table: String, queryParams: String = ""): String? = withContext(Dispatchers.IO) {
        if (!SupabaseConfig.isConfigured()) {
            Log.d(TAG, "Supabase n'est pas encore configuré. Utilisation des données locales.")
            return@withContext null
        }

        try {
            val urlString = "${SupabaseConfig.SUPABASE_URL}/rest/v1/$table$queryParams"
            val url = URL(urlString)
            val conn = url.openConnection() as HttpURLConnection
            conn.requestMethod = "GET"
            conn.setRequestProperty("apikey", SupabaseConfig.SUPABASE_ANON_KEY)
            conn.setRequestProperty("Authorization", "Bearer ${SupabaseConfig.SUPABASE_ANON_KEY}")
            conn.setRequestProperty("Accept", "application/json")
            conn.connectTimeout = 8000
            conn.readTimeout = 8000

            val responseCode = conn.responseCode
            if (responseCode in 200..299) {
                val reader = BufferedReader(InputStreamReader(conn.inputStream))
                val response = reader.readText()
                reader.close()
                return@withContext response
            } else {
                Log.e(TAG, "GET Error $responseCode: ${conn.responseMessage}")
            }
        } catch (e: Exception) {
            Log.e(TAG, "Exception during GET $table: ${e.message}")
        }
        return@withContext null
    }

    suspend fun post(table: String, jsonBody: String): Boolean = withContext(Dispatchers.IO) {
        if (!SupabaseConfig.isConfigured()) {
            Log.d(TAG, "Supabase non configuré.")
            return@withContext false
        }

        try {
            val urlString = "${SupabaseConfig.SUPABASE_URL}/rest/v1/$table"
            val url = URL(urlString)
            val conn = url.openConnection() as HttpURLConnection
            conn.requestMethod = "POST"
            conn.setRequestProperty("apikey", SupabaseConfig.SUPABASE_ANON_KEY)
            conn.setRequestProperty("Authorization", "Bearer ${SupabaseConfig.SUPABASE_ANON_KEY}")
            conn.setRequestProperty("Content-Type", "application/json")
            conn.setRequestProperty("Prefer", "return=minimal")
            conn.doOutput = true
            conn.connectTimeout = 8000

            val writer = OutputStreamWriter(conn.outputStream)
            writer.write(jsonBody)
            writer.flush()
            writer.close()

            val responseCode = conn.responseCode
            if (responseCode in 200..299) {
                Log.d(TAG, "POST $table Réussi ($responseCode)")
                return@withContext true
            } else {
                val errReader = BufferedReader(InputStreamReader(conn.errorStream ?: conn.inputStream))
                val errText = errReader.readText()
                errReader.close()
                Log.e(TAG, "POST $table Erreur HTTP $responseCode: $errText")
            }
        } catch (e: Exception) {
            Log.e(TAG, "Exception pendant POST $table: ${e.message}")
        }
        return@withContext false
    }

    /**
     * Upsert (INSERT OR UPDATE) — utilise Prefer: resolution=merge-duplicates.
     * Evite les erreurs de doublon (409) sur les colonnes UNIQUE (ex: id).
     * Idéal pour synchroniser les tickets entre les deux apps sans perte de données.
     */
    suspend fun upsert(table: String, jsonBody: String): Boolean = withContext(Dispatchers.IO) {
        if (!SupabaseConfig.isConfigured()) {
            Log.d(TAG, "Supabase non configuré (upsert).")
            return@withContext false
        }

        try {
            val urlString = "${SupabaseConfig.SUPABASE_URL}/rest/v1/$table"
            val url = URL(urlString)
            val conn = url.openConnection() as HttpURLConnection
            conn.requestMethod = "POST"
            conn.setRequestProperty("apikey", SupabaseConfig.SUPABASE_ANON_KEY)
            conn.setRequestProperty("Authorization", "Bearer ${SupabaseConfig.SUPABASE_ANON_KEY}")
            conn.setRequestProperty("Content-Type", "application/json")
            // merge-duplicates = INSERT ... ON CONFLICT (id) DO UPDATE SET ...
            conn.setRequestProperty("Prefer", "resolution=merge-duplicates,return=minimal")
            conn.doOutput = true
            conn.connectTimeout = 8000
            conn.readTimeout = 8000

            val writer = OutputStreamWriter(conn.outputStream)
            writer.write(jsonBody)
            writer.flush()
            writer.close()

            val responseCode = conn.responseCode
            if (responseCode in 200..299) {
                Log.d(TAG, "UPSERT $table OK ($responseCode)")
                return@withContext true
            } else {
                val errReader = BufferedReader(InputStreamReader(conn.errorStream ?: conn.inputStream))
                val errText = errReader.readText()
                errReader.close()
                Log.e(TAG, "UPSERT $table Erreur HTTP $responseCode: $errText")
            }
        } catch (e: Exception) {
            Log.e(TAG, "Exception pendant UPSERT $table: ${e.message}")
        }
        return@withContext false
    }

    suspend fun patch(table: String, filterQuery: String, jsonBody: String): Boolean = withContext(Dispatchers.IO) {
        if (!SupabaseConfig.isConfigured()) return@withContext false

        try {
            val urlString = "${SupabaseConfig.SUPABASE_URL}/rest/v1/$table?$filterQuery"
            val url = URL(urlString)
            val conn = url.openConnection() as HttpURLConnection
            conn.requestMethod = "PATCH"
            conn.setRequestProperty("apikey", SupabaseConfig.SUPABASE_ANON_KEY)
            conn.setRequestProperty("Authorization", "Bearer ${SupabaseConfig.SUPABASE_ANON_KEY}")
            conn.setRequestProperty("Content-Type", "application/json")
            conn.doOutput = true
            conn.connectTimeout = 8000

            val writer = OutputStreamWriter(conn.outputStream)
            writer.write(jsonBody)
            writer.flush()
            writer.close()

            val responseCode = conn.responseCode
            return@withContext (responseCode in 200..299)
        } catch (e: Exception) {
            Log.e(TAG, "Exception during PATCH $table: ${e.message}")
            return@withContext false
        }
    }

    suspend fun delete(table: String, filterQuery: String = ""): Boolean = withContext(Dispatchers.IO) {
        if (!SupabaseConfig.isConfigured()) return@withContext false

        try {
            val urlString = "${SupabaseConfig.SUPABASE_URL}/rest/v1/$table${if (filterQuery.isNotEmpty()) "?$filterQuery" else ""}"
            val url = URL(urlString)
            val conn = url.openConnection() as HttpURLConnection
            conn.requestMethod = "DELETE"
            conn.setRequestProperty("apikey", SupabaseConfig.SUPABASE_ANON_KEY)
            conn.setRequestProperty("Authorization", "Bearer ${SupabaseConfig.SUPABASE_ANON_KEY}")
            conn.connectTimeout = 8000

            val responseCode = conn.responseCode
            Log.d(TAG, "DELETE $table ResponseCode: $responseCode")
            return@withContext (responseCode in 200..299)
        } catch (e: Exception) {
            Log.e(TAG, "Exception during DELETE $table: ${e.message}")
            return@withContext false
        }
    }
}
