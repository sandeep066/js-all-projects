//Sample promise using std and async/await
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() < 0.5;
      if (success) {
        resolve("\nfetchData inside :Data fetched successfully");
      } else {
        reject(new Error("\nfetchData inside :Data fetching failed"));
      }
    }, 1000);
  });
}

//Normal promise call using then, catch
fetchData()
  .then((data) => {
    console.log("fetchData() call: data fetched succcesfully", data);
  })
  .catch((error) => {
    console.log("fetchData() call: data fetch error", error);
  })
  .finally(console.log("fetchData() call: Finally executed"));

// async/await way
const fetchApidata = async () => {
  try {
    let result = await fetchData();
    console.log("Async fetchApidata() : Data fetched successfully:", result);
  } catch (error) {
    console.error("Async fetchApidata() : Error fetching data:", error.message);
  } finally {
    console.log("Async fetchApidata() : Fetch operation completed.");
  }
};

fetchApidata();


//output
Run 1)
fetchData() call: Finally executed
fetchData() call: data fetch error Error: 
fetchData inside :Data fetching failed
    at Timeout._onTimeout (/home/runner/javascript/index.js:8:16)
    at listOnTimeout (node:internal/timers:573:17)
    at process.processTimers (node:internal/timers:514:7)
Async fetchApidata() : Data fetched successfully: 
fetchData inside :Data fetched successfully
Async fetchApidata() : Fetch operation completed.

Run 2)
fetchData() call: Finally executed
fetchData() call: data fetched succcesfully 
fetchData inside :Data fetched successfully
Async fetchApidata() : Data fetched successfully: 
fetchData inside :Data fetched successfully
Async fetchApidata() : Fetch operation completed.

Run 3)
fetchData() call: Finally executed
fetchData() call: data fetched succcesfully 
fetchData inside :Data fetched successfully
Async fetchApidata() : Error fetching data: 
fetchData inside :Data fetching failed
Async fetchApidata() : Fetch operation completed.

























