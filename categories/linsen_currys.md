---
layout: default
title: Linsen Currys
category: linsen_currys
---
<h1>Linsen Currys</h1>
<ul>
  {% assign cat_recipes = site.recipes | where_exp: "r", "r.path contains page.category" | sort: "title" %}
  {% for recipe in cat_recipes %}
    <li><a href="{{ recipe.url | relative_url }}">{{ recipe.title }}</a></li>
  {% endfor %}
</ul>
