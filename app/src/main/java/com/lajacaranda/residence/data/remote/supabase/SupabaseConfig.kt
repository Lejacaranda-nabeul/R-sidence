package com.lajacaranda.residence.data.remote.supabase

object SupabaseConfig {
    // URL de votre projet Supabase
    var SUPABASE_URL: String = "https://smjkyetcdoohefdzshbc.supabase.co"

    // Clé publique JWT Anon Supabase
    var SUPABASE_ANON_KEY: String = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtamt5ZXRjZG9vaGVmZHpzaGJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYwNDgyMzgsImV4cCI6MjEwMTYyNDIzOH0.9lwOqMc86OLUL0aaFF0fvSFsLdQye81fO4nHbFAdK0o"

    fun isConfigured(): Boolean {
        return SUPABASE_URL.startsWith("https://") && 
               !SUPABASE_ANON_KEY.contains("YOUR_ANON_KEY") &&
               SUPABASE_ANON_KEY.length > 20
    }
}


