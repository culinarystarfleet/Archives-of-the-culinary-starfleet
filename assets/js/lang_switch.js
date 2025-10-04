function switchLang(lang) {
  localStorage.setItem('lang', lang);
  location.reload();
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('lang') || 'de';
  document.documentElement.lang = lang;
});
