package com.lajacaranda.residence.util

import android.content.Context
import android.content.SharedPreferences
import android.content.res.Configuration
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import java.util.Locale

enum class AppLanguage(val code: String, val displayName: String, val flag: String) {
    FR("fr", "Français", "🇫🇷"),
    EN("en", "English", "🇬🇧"),
    ES("es", "Español", "🇪🇸"),
    IT("it", "Italiano", "🇮🇹"),
    DE("de", "Deutsch", "🇩🇪"),
    AR("ar", "العربية", "🇸🇦");

    companion object {
        fun fromCode(code: String): AppLanguage {
            return entries.find { it.code.equals(code, ignoreCase = true) } ?: FR
        }
    }
}

object LanguageManager {
    private const val PREFS_NAME = "jacaranda_lang_prefs"
    private const val KEY_LANG = "selected_language"

    private val _currentLanguage = MutableStateFlow(AppLanguage.FR)
    val currentLanguage: StateFlow<AppLanguage> = _currentLanguage.asStateFlow()

    fun init(context: Context) {
        val prefs = getPrefs(context)
        val savedCode = prefs.getString(KEY_LANG, null)
        val defaultLang = if (savedCode != null) {
            AppLanguage.fromCode(savedCode)
        } else {
            val systemLang = Locale.getDefault().language
            AppLanguage.fromCode(systemLang)
        }
        _currentLanguage.value = defaultLang
        applyLocale(context, defaultLang)
    }

    fun setLanguage(context: Context, language: AppLanguage) {
        _currentLanguage.value = language
        getPrefs(context).edit().putString(KEY_LANG, language.code).apply()
        applyLocale(context, language)
    }

    fun getLocalizedContext(baseContext: Context, language: AppLanguage = _currentLanguage.value): Context {
        val locale = Locale(language.code)
        Locale.setDefault(locale)
        val config = Configuration(baseContext.resources.configuration)
        config.setLocale(locale)
        config.setLayoutDirection(locale)
        return baseContext.createConfigurationContext(config)
    }

    private fun applyLocale(context: Context, language: AppLanguage) {
        val locale = Locale(language.code)
        Locale.setDefault(locale)
        val res = context.resources
        val config = Configuration(res.configuration)
        config.setLocale(locale)
        config.setLayoutDirection(locale)
        @Suppress("DEPRECATION")
        res.updateConfiguration(config, res.displayMetrics)
    }

    private fun getPrefs(context: Context): SharedPreferences {
        return context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
    }
}
