---
layout: default
---

# Search Results
<html>
<script src="/js/search-script.js"></script>

  <!-- Html Elements for Search -->
  <div id="search-container">
    <input type="text" id="search-input" placeholder="search...">
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