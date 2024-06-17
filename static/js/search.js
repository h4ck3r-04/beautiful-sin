document.addEventListener("DOMContentLoaded", function () {
  const searchOverlay = document.getElementById('search-overlay');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  let allResults = [];

  function toggleSearchOverlay() {
    searchOverlay.style.display = searchOverlay.style.display === 'flex' ? 'none' : 'flex';
    if (searchOverlay.style.display === 'flex') {
      searchInput.focus();
      fetchResults();
    } else {
      searchInput.value = '';
      searchResults.innerHTML = '';
    }
  }

  function fetchResults(query = '') {
    fetch(`/search/?q=${query}`)
      .then(response => response.json())
      .then(data => {
        allResults = data.results;
        displayResults(allResults);
      });
  }

  function displayResults(results) {
    searchResults.innerHTML = results.map(item => `<li data-url="${item.url}">${item.name}</li>`).join('');
  }

  document.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
      event.preventDefault();
      toggleSearchOverlay();
    } else if (event.key === 'Escape') {
      searchOverlay.style.display = 'none';
    }
  });

  searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase();
    const filteredResults = allResults.filter(item => item.name.toLowerCase().includes(query));
    displayResults(filteredResults);
  });

  searchInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      const firstResult = searchResults.querySelector('li');
      if (firstResult) {
        const url = firstResult.getAttribute('data-url');
        window.location.href = url;
      }
    }
  });

  searchResults.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
      const url = event.target.getAttribute('data-url');
      window.location.href = url;
    }
  });
});
