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

//throttle
function throttle(func,delay){
  let lastTime=0;
    return function(...args){
      let currentTime=Date.now()
      if(currentTime-lastTime>=delay){
          func(...args)
        lastTime=currentTime
      }
    }
}
function fetchApidata(data){
  console.log("Fetched api data",data)
}

throttledFetch=throttle(fetchApidata,1000)

throttledFetch("Fetch api 1 called !")
throttledFetch("Fetch api 2 called !")
throttledFetch("Fetch api 3 called !")
// After 1 second, if no more function calls, next call will be executed
setTimeout(() => {
      throttledFetch("Fetch api 4 called !"); 
}, 1000);

//output
Fetched api data Fetch api 1 called !
Fetched api data Fetch api 4 called !

//if setTimeout set to < 1000 like 700 in last call,
Fetched api data Fetch api 1 called ! 

