---
layout: default
---

# Search Results
<html>
<script src="/js/search-script.js"></script>

  <!-- Html Elements for Search -->
  <div id="search-container" class="center">
    <input type="text" id="search-input" placeholder="what are you looking for?">
  </div>
  <ul id="results-container"></ul>

  <script>
    SimpleJekyllSearch({
      searchInput: document.getElementById('search-input'),
      resultsContainer: document.getElementById('results-container'),
      json: '/search.json'
    })  
  </script>
</html>