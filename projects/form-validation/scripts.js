const nameInput = document.getElementById("nameInput");
const passwordInput = document.getElementById("passwordInput");
const button = document.getElementById("btn");
const nameErrorMsg = document.getElementById("nameErrorMsg");
const passwordErrorMsg = document.getElementById("passwordErrorMsg");

button.addEventListener("click", (event) => {
  nameErrorMsg.innerHTML = "";
  passwordErrorMsg.innerHTML = "";
});
