const searchData = [
  { title: "result 1", snippet: "description of result 1" },
  { title: "result 2", snippet: "description of result 2" },
  { title: "result 3", snippet: "description of result 3" },
];

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

const handleSearch = (searchWord) => {
  try {
    if (!searchWord || searchWord.length < 3) {
      throw new Error("Search term must be at least 3 characters long.");
    }

    const searchResults = searchData.filter((item) =>
      item.title.toLowerCase().includes(searchWord.toLowerCase())
    );

    displayResults(searchResults);
  } catch (error) {
    console.error("Error during search:", error.message);
  }
};

const displayResults = (searchResults) => {
  const searchResultsDiv = document.getElementById("search-results");
  if (!searchResultsDiv) {
    throw new Error("Search results container not found.");
  }

  searchResultsDiv.innerHTML = "";
  searchResults.forEach((result) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${result.title}</strong><br>${result.snippet}`;
    searchResultsDiv.appendChild(li);
  });
};

const debouncedSearch = debounce(handleSearch, 500);

const handleInput = (e) => {
  try {
    const searchWord = e.target.value.trim();
    debouncedSearch(searchWord);
  } catch (error) {
    console.error("Error handling input:", error.message);
  }
};

const inputdiv = document.getElementById("search-input");
if (!inputdiv) {
  throw new Error("Search input element not found.");
}

inputdiv.addEventListener("input", handleInput);
