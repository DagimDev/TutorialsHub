let calculation = "";
const updateCalculation = (value) => {
  calculation += value;
  console.log(calculation);
};

function displayCalculation() {
  document.querySelector(".display-calculation").innerHTML = calculation;
}

const calculateResult = () => {
  calculation = eval(calculation);
  console.log(calculation);
};
