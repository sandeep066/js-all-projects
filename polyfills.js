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

a)Before Understanding custom map,we need to understand
i)Callback
ii)Excess parameters ignored
Hence below example

//addNumbers callback
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
• We have an array of numbers called numbers.
• We define a function called addNumbers, which takes two numbers
 as arguments and returns their sum. We define another function called processNumberPairs,
 which takes an array of numbers and a callback function as arguments. 
 This function iterates over pairs of numbers in the array (using each number and the one after it), 
 calls the callback function with each pair of numbers, index and array and collects the results in a new array.
• Since addNumbers takes only two parameters, remaining excess arguments index and array are ignored  
  and callback function still gets called with these mismatch parameters
• We call the processNumberPairs function with the numbers array and the addNumbers function as arguments. 
  This will add each pair of numbers in the numbers array and return a new array containing the results.

Finally, we log the addedResults array to the console, which contains the sums of each pair of numbers.
*/

b)custom map implementation using anonymous function without using keyword function

Array.prototype.myMap = function (callback) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(callback(this[i], i, this));
  }
  return temp;
};

const numbers = [1, 2, 3, 4];

const multiplyResult = numbers.myMap((num) => {
  return num * 2;
});

console.log(multiplyResult); 

//c)Customer map using normal function definition
console.log("Customer map using normal function definition");

Array.prototype.mymap = function(callback) {
  const results = [];

  for (let i = 0; i < this.length; i++) {
    results.push(callback(this[i], i, this));
  }

  return results;
};

const numbers = [1, 2, 3, 4];

function multiplyCallback(num, i, arr) {
  console.log("Number:", num);
  console.log("Index:", i);
  console.log("Array:", arr);
  return num * 3; // Example operation
}

const multiplyResults = numbers.mymap(multiplyCallback);

console.log(multiplyResults); // Output: [3, 6, 9, 12]

/*
• We define a named function multiplyCallback instead of an arrow function.
• The function multiplyCallback has the same parameters as the arrow function (num, i, arr) => { ... }.
• Inside multiplyCallback, we log the current num, i, and arr values to the console, just as in the arrow function.
• We pass multiplyCallback as the callback function to the mymap method.
The result remains the same as before, with each number in the numbers array being multiplied by 3.
*/


//d) Customer map using an anonymous function directly within the mymap method call
console.log(
  "Customer map using an anonymous function directly within the mymap method call",
);
Array.prototype.mymap = function(callback) {
  const results = [];

  for (let i = 0; i < this.length; i++) {
    results.push(callback(this[i], i, this));
  }

  return results;
};

const numbers = [1, 2, 3, 4];

const multiplyResults = numbers.mymap(function(num, i, arr) {
  console.log("Number:", num);
  console.log("Index:", i);
  console.log("Array:", arr);
  return num * 3; // Example operation
});

console.log(multiplyResults); // Output: [3, 6, 9, 12]

/*
• We define an anonymous function directly within the mymap method call.
• This anonymous function has the same parameters as the previous named function (num, i, arr).
• Inside the anonymous function, we log the current num, i, and arr values to the console, just as before.
• We pass this anonymous function as the callback to the mymap method.
The result remains the same as before, with each number in the numbers array being multiplied by 3.
*/
