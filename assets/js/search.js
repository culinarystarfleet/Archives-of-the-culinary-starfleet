// HTML-Elemente
const searchInput = document.getElementById('recipe-search');
const searchResults = document.getElementById('search-results');

let recipes = [];

// Rezepte aus der JSON-Datei laden
fetch('{{ "/assets/data/recipes.json" | relative_url }}')
  .then(response => response.json())
  .then(data => {
    recipes = data;
  })
  .catch(err => console.error('Fehler beim Laden der Rezepte:', err));

// Suchfunktion
searchInput.addEventListener('input', function() {
  const query = this.value.toLowerCase();
  searchResults.innerHTML = '';

  if (query.length < 1) return; // nichts anzeigen, wenn Eingabe leer

  const filtered = recipes.filter(r => r.title.toLowerCase().includes(query));

  filtered.forEach(r => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = r.url;
    a.textContent = r.title;
    li.appendChild(a);
    searchResults.appendChild(li);
  });
});
