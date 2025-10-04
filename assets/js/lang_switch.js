function switchLang(lang) {
  localStorage.setItem('lang', lang);
  location.reload();
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('lang') || 'de';
  document.documentElement.lang = lang;

  // TODO: später die Kategorien und Rezepte dynamisch nach Sprache wechseln
});
