<div class="prose prose-invert max-w-none">
  <h1>{{ page.title }}</h1>
  <ul class="space-y-2">
    {% assign cat_recipes = site.recipes | where_exp: "r", "r.path contains page.category" | sort: "title" %}
    {% for recipe in cat_recipes %}
      <li>
        <a href="{{ recipe.url | relative_url }}" class="text-yellow-300 hover:text-yellow-500 underline">
          {{ recipe.title }}
        </a>
      </li>
    {% endfor %}
  </ul>
</div>
