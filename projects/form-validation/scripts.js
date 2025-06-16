const nameInput = document.getElementById("nameInput");
const passwordInput = document.getElementById("passwordInput");
const button = document.getElementById("btn");
const nameErrorMsg = document.getElementById("nameErrorMsg");
const passwordErrorMsg = document.getElementById("passwordErrorMsg");

button.addEventListener("click", (event) => {
  nameErrorMsg.innerHTML = "";
  passwordErrorMsg.innerHTML = "";
  let isValid = true;
  const nameValue = nameInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  // Validate name
  if (nameValue === "") {
    console.log("Name is empty");
    nameInput.focus();
    nameErrorMsg.innerHTML = "Name is required*";
    isValid = false;
  }

  // Validate password
  if (passwordValue === "") {
    console.log("Password is empty");
    passwordErrorMsg.innerHTML = "Password is required*";
    isValid = false;
  } else if (passwordValue.length < 6) {
    passwordErrorMsg.innerHTML = "Password must be at least 6 characters long";
    isValid = false;
  }

  // Prevent submition if validation fails
  if (!isValid) {
    event.preventDefault();
  } else {
    alert("Submited successfully");
  }
});
