console.log("Script loaded successfully!");
// fetch("https://randomuser.me/api")
//   .then((response) => response.json())
//   .then((data) => console.log("Random User Data:", data))
//   .catch((error) => console.log("Something went wrong:", error));

async function fetchData() {
  try {
    let response = await fetch("https://randomuser.me/api");
    // console.log(response)
    let data = await response.json();
    // console.log(data)
    let user = data.results[0];
    console.log(user);

    const userContainer = document.getElementById("user-container");
    userContainer.innerHTML = `
      <img src="${user.picture.large}" alt="User Picture">
      <h3>name: ${user.name.title} ${user.name.first} ${user.name.last}</h3>
      <h3>Email: ${user.email}</h3>
      <h3>Location: ${user.location.country} ${user.location.city}</h3>
    `;
  } catch (error) {
    console.log("Something went wrong:", error);
  }
}

fetchData();