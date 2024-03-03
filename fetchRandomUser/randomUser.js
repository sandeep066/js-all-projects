const displayRandomUser = (randomUser) => {
  displayUserDiv = document.getElementById("display-user");

  if (!randomUser?.address || !randomUser?.company) {
    displayUserDiv.innerHTML = "<p>Error: Invalid user data</p>";
    return;
  }

  const address = `
  ${randomUser.address.street}, 
  ${randomUser.address.suite}, 
  ${randomUser.address.city} - ${randomUser.address.zipcode}
`;
  const companyName = randomUser.company.name || "N/A";

  displayUserDiv.innerHTML = `
  <p>Name: ${randomUser.name}<p/>
  <p>username: ${randomUser.username}<p/>
  <p>Email: ${randomUser.email}<p/>
  <p>address: ${address}<p/>
  <p>Company name: ${companyName}<p/>
  `;
};
const getRandomUser = async () => {
  const button = document.getElementById("fetch-user-btn");
  button.disabled = true;
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/users/" +
        Math.floor(Math.random() * 10 + 1)
    );
    if (!res.ok) {
      throw new Error("Failed to fetch random user");
    }
    const data = res.json();
    return data;
  } catch (error) {
    console.error("Random user fetch api error", error);
    throw error;
  } finally {
    button.disabled = false;
  }
};
const handleFetch = async () => {
  try {
    //alert("sandeep");
    const randomUser = await getRandomUser();
    displayRandomUser(randomUser);
  } catch (error) {
    console.error("handleFetch error", error);
  }
};
const button = document.getElementById("fetch-user-btn");
button.addEventListener("click", handleFetch);
