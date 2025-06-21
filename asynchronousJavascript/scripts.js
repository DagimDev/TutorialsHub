console.log("Script loaded successfully!");
// Callback Function
function orderPizza(callback) {
  console.log("Order Pizza")
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