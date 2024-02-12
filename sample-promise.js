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

//Nomral promise call using then, catch
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
