let language = 'de';
let useSpaceTerms = true;

function setLanguage(lang) {
  language = lang;
  updateTexts();
}

function toggleTerms() {
  useSpaceTerms = !useSpaceTerms;
  updateTexts();
}

function updateTexts() {
  // Beispiel für dynamischen Begriff
  const oven = document.querySelectorAll('#instructions li');
  oven.forEach(li => {
    if(useSpaceTerms){
      li.innerHTML = li.innerHTML.replace('Ofen', 'Sternenschmiede');
    } else {
      li.innerHTML = li.innerHTML.replace('Sternenschmiede', 'Ofen');
    }
  });

  // Intro-Text ändern je nach Sprache
  const intro = document.getElementById('intro');
  if(intro){
    if(language === 'de'){
      intro.innerText = 'Willkommen in der Sternenschmiede! Entdecke Rezepte aus dem Kosmos und experimentiere mit galaktischen Zutaten.';
    } else {
      intro.innerText = 'Welcome to the Star Forge! Explore recipes from the cosmos and experiment with galactic ingredients.';
    }
  }
}
