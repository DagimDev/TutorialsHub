const button = document.getElementById("btnId");

const changeColor = function () {
    button.style.color = 'red'
};

addEventListener('click', changeColor)

// button.addEventListener('click', () => changeColor())

// addEventListener('click', function () {
//     button.style.color = 'red'
// })

// button.addEventListener('click', () => {
//     button.style.color = 'red'
// })

removeEventListener('click', changeColor)

const myButton = document.getElementById('myButton')

myButton.addEventListener("click", function () {
myButton.style.color = "red";
});
myButton.addEventListener("click", function () {
alert("button clicked!!!");
});
myButton.addEventListener("click", function () {
myButton.style.backgroundColor = "yellow";
});

// console.log(myButton)

// const changeColorToRed = () => {
//     myButton.style.color = 'red'
// }

// const changebackgroudToYellow = () => {
//     myButton.style.backgroundColor = 'yellow'
// }

// const clickAlert = () => {
//     alert('button is clicked!!!')
// }

// myButton.addEventListener('click', clickAlert)
// myButton.addEventListener('click', changebackgroudToYellow)
// myButton.addEventListener('click', changeColorToRed)

const checkbox = document.getElementById('checkbox')
const check = (event) => {
    checkbox.style.color = 'red'
    event.preventDefault()
}

checkbox.addEventListener('click', check)

const myForm = document.getElementById('myForm')
const submit = document.getElementById('submit')


const functionToPreventDefault = (e) => {
    submit.innerHTML = "default behavior is prevented!!";
    e.preventDefault()
}
myForm.addEventListener('click', functionToPreventDefault)