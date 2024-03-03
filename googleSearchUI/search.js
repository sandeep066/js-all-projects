const handleKeyDown = (e) => {
  alert(e.target.value.trim());
};

const searchData = [
  { title: "result 1", snippet: "description of result 1 " },
  { title: "result 2", snippet: "description of result 2 " },
  { title: "result 3", snippet: "description of result 3 " },
];
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

const handleSearch = (searchWord) => {
  const searchResults = searchData.filter((item) =>
    item.title.toLowerCase().includes(searchWord.toLowerCase())
  );

  displayResults(searchResults);
};

const displayResults = (searchResults) => {
  const searchResultsDiv = document.getElementById("search-results");
  searchResultsDiv.innerHTML = "";
  searchResults.forEach((result) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${result.title}</strong><br>${result.snippet}`;
    searchResultsDiv.appendChild(li);
  });
};
const debouncedSearch = debounce(handleSearch, 500);

const handleInput = (e) => {
  searchWord = e.target.value.trim();
  if (searchWord.length > 3) {
    debouncedSearch(searchWord);
  } else {
    document.getElementById("search-input").innerHTML = "";
  }
};

const inputdiv = document.getElementById("search-input");
inputdiv.addEventListener("input", handleInput);
