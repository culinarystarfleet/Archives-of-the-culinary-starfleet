---
layout: default
title: Brätergerichte
category: braetergerichte
---

<div class="prose max-w-none text-white">
  <h1 class="text-4xl font-bold mb-4">{{ page.title }}</h1>
  <ul class="space-y-2">
  {% assign cat_recipes = site.recipes | where_exp: "r", "r.path contains page.category" | sort: "title" %}
  {% for recipe in cat_recipes %}
    <li> <a href="{{ recipe.url | relative_url }}" class="text-yellow-300 hover:text-yellow-500 underline text-lg">
          {{ recipe.title }}</a></li>
  {% endfor %}
  </ul>
</div>
