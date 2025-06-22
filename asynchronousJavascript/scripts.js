console.log("Script loaded successfully!");
// Callback Function
function orderPizza(callback) {
  console.log("Order Pizza");
  setTimeout(() => {
    const pizza = "🍕";
    console.log(`Your ${pizza} is Ready`);
    callback(pizza);
  }, 2000);
}

function pizzaReady(pizza) {
  console.log(`Eat Your ${pizza}`);
}
orderPizza(pizzaReady);

// Example fetching data using promisses

fetch("https://randomuser.me/api")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Something went wrong:", error));

// Example : handling fetch method using async-await

async function fetchData() {
  try {
    const response = await fetch("https://randomuser.me/api");
    // console.log(response);
    const data = await response.json();
    // console.log(data)
    const user = data.results[0];
    console.log(user);
  } catch (error) {
    console.log("Somethind is wrong");
    throw error;
  }
}

fetchData();

// Example :
// ○ Let’s create our own promise based API called alarm
const alarm = (person, delay) => {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      reject("Alarm delay can not be negative");
    }
    setTimeout(() => {
      resolve(`Wake up ${person}`);
    }, delay);
  });
};

alarm("natty", 1000)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

async function getUp() {
  try {
    const res = await alarm("bob", 3000);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

getUp();