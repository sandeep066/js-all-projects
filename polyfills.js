//1)Debounce
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

function searchdata(data) {
  console.log("Searching...: " + data);
}

debouncedSearch = debounce(searchdata, 1000);
debouncedSearch("Debounced search 1");
debouncedSearch("Debounced search 2");
debouncedSearch("Debounced search 3");

//Output:
Searching...: Debounced search 3

+++++++++++++++++++++++++++++
