(function () {
  'use strict';

  var STORAGE_KEY = 'enbonnet-lang';
  var DEFAULT_LANG = 'en';
  var SUPPORTED = ['en', 'es'];
  var translations = window.__I18N_DATA__ || {};

  function saved() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (_) { return null; }
  }

  function save(lang) {
    try {
      if (lang && lang !== DEFAULT_LANG) localStorage.setItem(STORAGE_KEY, lang);
      else localStorage.removeItem(STORAGE_KEY);
    } catch (_) {}
  }

  function current() {
    var s = saved();
    if (s && SUPPORTED.indexOf(s) !== -1) return s;
    var nav = (navigator.language || navigator.userLanguage || '').slice(0, 2).toLowerCase();
    return nav === 'es' ? 'es' : DEFAULT_LANG;
  }

  function get(obj, path) {
    if (!obj || typeof obj !== 'object') return undefined;
    var keys = path.split('.');
    var cur = obj;
    for (var i = 0; i < keys.length; i++) {
      if (cur == null || typeof cur !== 'object') return undefined;
      cur = cur[keys[i]];
    }
    return cur;
  }

  function val(lang, key) {
    return get(translations[lang], key) ?? get(translations[DEFAULT_LANG], key);
  }

  function apply(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var v = val(lang, key);
      if (v == null) return;
      if (el.tagName === 'META') el.setAttribute('content', v);
      else el.textContent = v;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var raw = el.getAttribute('data-i18n-attr');
      raw.split(',').forEach(function (pair) {
        var parts = pair.trim().split(':');
        if (parts.length !== 2) return;
        var attr = parts[0];
        var key = parts[1];
        var v = val(lang, key);
        if (v != null) el.setAttribute(attr, v);
      });
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var bl = btn.getAttribute('data-lang');
      var active = bl === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
  }

  function switchTo(lang) {
    if (SUPPORTED.indexOf(lang) === -1) return;
    save(lang);
    apply(lang);
  }

  function init() {
    var lang = current();
    fetch('/translations.json', { cache: 'no-store' })
      .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
      .then(function (data) { translations = data; })
      .catch(function () {})
      .finally(function () { apply(lang); });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var nl = btn.getAttribute('data-lang');
        if (nl) switchTo(nl);
      });
    });
  }

  window.i18n = { current: current, apply: apply, switch: switchTo };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();