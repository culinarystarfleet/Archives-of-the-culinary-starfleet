// Kategorien und Rezepte definieren
const recipes = {
  "Sternenschmieden (Hauptgerichte)": [
    { name: "Cosmic Lasagna", file: "cosmic_lasagna.html" },
    { name: "Solar Curry", file: "solar_curry.html" }
  ],
  "Asteroiden-Snacks": [
    { name: "Nebula Pancakes", file: "nebula_pancakes.html" },
    { name: "Comet Chips", file: "comet_chips.html" }
  ],
  "Galaktische Desserts": [
    { name: "Milky Way Pudding", file: "milkyway_pudding.html" }
  ]
};

// Dropdown-Menü erstellen
const navbar = document.getElementById("navbar");

for (const [category, items] of Object.entries(recipes)) {
  const dropdown = document.createElement("div");
  dropdown.className = "dropdown";

  const button = document.createElement("button");
  button.className = "dropbtn";
  button.textContent = category;

  const menu = document.createElement("div");
  menu.className = "dropdown-content";

  items.forEach(item => {
    const link = document.createElement("a");
    link.textContent = item.name;
    link.href = `recipes/${item.file}`;
    menu.appendChild(link);
  });

  dropdown.appendChild(button);
  dropdown.appendChild(menu);
  navbar.appendChild(dropdown);
}
