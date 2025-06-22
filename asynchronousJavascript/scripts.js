console.log("Script loaded successfully!");
// Callback Function
function orderPizza(callback) {
  console.log("Order Pizza");
  setTimeout(() => {
    const pizza = "🍕";
    console.log(`Your ${pizza} is Ready`);
    callback(pizza);
  }, 1000);
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
