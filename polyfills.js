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

//2)throttle
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

//3)Excess parameters and callback : Sample excess arguments and callback invovation example:

const numbers = [1, 2, 3, 4, 5];

// Callback function to add two numbers
function addNumbers(num1, num2) {
  return num1 + num2;
}

// Function to process each pair of numbers in the array using a callback function
function processNumberPairs(numbersArray, callback) {
  const processedResults = [];
  for (let i = 0; i < numbersArray.length - 1; i++) {
    processedResults.push(callback(numbersArray[i], numbersArray[i + 1],i,this));
  }
  return processedResults;
}

// Call the processNumberPairs function with the numbers array and addNumbers function as arguments
const addedResults = processNumberPairs(numbers, addNumbers);

console.log(addedResults); // Output: [3, 5, 7, 9]


/*
Excess parameters: When a function is called with more arguments than its declared parameters, 
JavaScript does not raise an error. Instead, it assigns the extra arguments to variables within the function's scope. 
However, those extra arguments are not directly accessible via named parameters.

Inside the function body, you can access all arguments using the arguments object,
which is an array-like object available in all functions. The arguments object contains an entry 
for each argument passed to the function, regardless of the number of declared parameters.

function exampleFunction(param1, param2) {
  console.log(param1); // Outputs: 1
  console.log(param2); // Outputs: 2
  console.log(arguments[2]); // Outputs: 3
  console.log(arguments[3]); // Outputs: undefined
}

exampleFunction(1, 2, 3);

In this example:

param1 is assigned the value of the first argument passed to the function (1).
param2 is assigned the value of the second argument passed to the function (2).
arguments[2] accesses the third argument passed to the function (3).
arguments[3] accesses an undefined value because there is no fourth argument passed to the function
*/

//4)Custom map() function

Array.prototype.myMap = function (callback) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(callback(this[i], i, this));
  }
  return temp;
};

const numbers = [1, 2, 3, 4];

const multiplyResult = numbers.myMap((num, i, arr) => {
  return num * 2;
});

console.log(multiplyResult); //Array.prototype.myMap = function (callback) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(callback(this[i], i, this));
  }
  return temp;
};

const numbers = [1, 2, 3, 4];

const multiplyResult = numbers.myMap((num, i, arr) => {
  return num * 2;
});

console.log(multiplyResult);Array.prototype.myMap = function (callback) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(callback(this[i], i, this));
  }
  return temp;
};

const numbers = [1, 2, 3, 4];

const multiplyResult = numbers.myMap((num, i, arr) => {
  return num * 2;
});

console.log(multiplyResult); //[ 2, 4, 6, 8 ]
