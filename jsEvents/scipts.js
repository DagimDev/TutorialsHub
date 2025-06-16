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
