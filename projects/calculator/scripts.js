let calculation = JSON.parse(localStorage.getItem("calculation")) || "";
const updateCalculation = (value) => {
  calculation += value;
  console.log(calculation);
};

function displayCalculation() {
  document.querySelector(".display-calculation").innerHTML = calculation;
  localStorage.setItem("calculation", JSON.stringify(calculation))
}

const calculateResult = () => {
  calculation = eval(calculation);
  console.log(calculation);
  localStorage.setItem("calculation", JSON.stringify(calculation))
};


const clearCalculation = () => {
  calculation = ""
  localStorage.removeItem("calculation")
  console.log(calculation)
}