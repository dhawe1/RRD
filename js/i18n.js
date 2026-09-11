/**
 * i18n.js
 * -----------------------------------------------------------------------
 * Everything related to language state: current language, translation
 * lookup, RTL/LTR direction, localStorage persistence, and broadcasting
 * language-change events so app.js can re-render without a page reload.
 * -----------------------------------------------------------------------
 */

const i18n = (() => {
  const STORAGE_KEY = "plab_lang";
  const DEFAULT_LANG = "ar";
  const SUPPORTED = ["ar", "en"];

  let currentLang = DEFAULT_LANG;
  const listeners = [];

  function readStoredLang() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && SUPPORTED.includes(stored)) return stored;
    } catch (e) {
      /* localStorage unavailable (e.g. file:// restrictions) — fall back silently */
    }
    return DEFAULT_LANG;
  }

  function persistLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore persistence failure */
    }
  }

  function applyDocumentDirection(lang) {
    const html = document.documentElement;
    html.setAttribute("lang", lang);
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    html.classList.toggle("lang-ar", lang === "ar");
    html.classList.toggle("lang-en", lang === "en");
  }

  function init() {
    currentLang = readStoredLang();
    applyDocumentDirection(currentLang);
    return currentLang;
  }

  function getLang() {
    return currentLang;
  }

  function isRTL() {
    return currentLang === "ar";
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang) || lang === currentLang) return;
    currentLang = lang;
    persistLang(lang);
    applyDocumentDirection(lang);
    listeners.forEach((fn) => {
      try {
        fn(lang);
      } catch (e) {
        console.error("i18n listener error:", e);
      }
    });
  }

  function toggle() {
    setLang(currentLang === "ar" ? "en" : "ar");
  }

  function onChange(fn) {
    listeners.push(fn);
  }

  /**
   * t(field) — resolve a bilingual field object `{ ar, en }` to the
   * current language's string. Falls back gracefully if a language
   * key is missing so future partial content never breaks rendering.
   */
  function t(field) {
    if (field == null) return "";
    if (typeof field === "string") return field;
    return field[currentLang] ?? field.ar ?? field.en ?? "";
  }

  /**
   * tEquip(field) — like t(), but ALWAYS resolves to the English string,
   * regardless of the current site language. Used exclusively for
   * equipment/device names, which must stay in English even when the
   * rest of the UI is Arabic. Falls back to ar/string form only if no
   * English value exists, so nothing ever renders blank.
   */
  function tEquip(field) {
    if (field == null) return "";
    if (typeof field === "string") return field;
    return field.en ?? field.ar ?? "";
  }

  return { init, getLang, isRTL, setLang, toggle, onChange, t, tEquip, SUPPORTED };
})();
