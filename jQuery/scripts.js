// Adding jQuery library to our web page
// • There are two ways to include jQuery into your HTML
// o You can download the latest version, save it locally in your computer and include
// it in your HTML’s <header> using a simple <script > tag. Link to offcicial jQuery
// website:
// ▪ https://jquery.com/download/
// o Including jQuery from a CDN and adding it right before the closing </body> in
// <script> tag. Note: Your jQuery CDN needs to be placed before your custom
// JavaScript file
console.log("jQuery");
const logParagraph = $("#myParagraph");
console.log(logParagraph); // logs my paragraph

// ▪ Example: of selecting class using jquery
var logDiv = $(".myDiv");
console.log(logDiv); // logs the two divs with

// Example: select using element name
console.log($("span")); // returns our <span> element

// $("li").even().css("background", "yellow")
// $("li").odd().css("background", "purple")

$("ul li:nth-child(2)").css("background", "lightgreen");

$("h2").has("p").css("color", "lightgreen");

$("ul:contains(First list item)").css("background-color", "pink");

$(".divi").empty();

$("ul li:nth-child(5)").hide();

$("span").show();

const html = $("ul li:nth-child(7)").html();
console.log(html);

console.log($("li[class=third]").text());

// $("#divId").before($("#firstPar"))

// $("#divId").after($("#firstPar"));

// $("#divId").prepend($("#firstPar"));

$("#divId").append($("#firstPar"));
let secondPar = $(".secondPar").addClass("classOne classTwo");
secondPar.removeClass("classTwo");

$(".thirdPar").css("color", "red");

console.log($("input").val());

const inputValue = $("input#firstName").val();
console.log($.isNumeric(inputValue));

// Looping using vanilla js
const myUl = document.querySelectorAll(".myUl li");

for (let i = 0; i < myUl.length; i++) {
  if (i % 2 === 0) {
    let even = myUl[i];
    even.style.backgroundColor = "pink";
  }
}

// Looping using jQuery

$(".myUl li").odd().css("background", "lightgreen");

// Bind any event triggered on the selected elements to an event handler

// Example: When any <h3> is clicked, it will print “'<h3> was clicked'

$("h3").on("click", function () {
  console.log("h3 is clicked");
});

// Bind multiple events to one event handler
// • Example: Let’s trigger the same handler function whenever the mouse
// hovers over or leaves our <span>

$("span").on("mouseenter mouseleve", () => {
  alert("mouseOver or mouseLeave");
});

// Bind multiple events and multiple handlers to the selected elements
// • Example: Let’s assign multiple event handler functions for multiple
// events to the selected h4
$("h4").on({
  click: function () {
    console.log("clicking h4");
  },
  mouseenter: function () {
    $("h4").css("background-color", "yellow");
  },
  mouseleave: function () {
    console.log("mouse leaving h4");
  },
});


// Example: Let’s alert a text and also change the input’s background color
// to red when the <input> loses focus because user moved away the pointer
// from it.

const input = $("input")
input.blur(() => {
    input.css("background", "red")
    alert("input losses focus")
})

$("input").keypress(function () {
$("label").css("background-color", "pink");
});

// Example: Let’s make a <h5> hide when <h6> is clicked
const h5 = $("h5")
const h6 = $("h6")
h5.click(() => {
    h6.hide()
})

// Example: Below, let’s show an alert once the document is fully loaded

$(document).ready(() => {
    alert("Document is fully loaded")
})


// Example: Let’s hide and show our
// <p> with “p2” id name when we click our <p> that has an id of
// “p1”. It will take 1000 milliseconds for the <p> to hide or show upon click

$("#p1").on('click', () => {
    $("#p2").toggle()
})

// Example: Let’s slide our <p2> up with id of “btn” when a
// button is clicked

// $("#btn").on('click', () => {
//     $("#p2").slideUp(2000) 
// })

$("#btn1").on('click', () => {
    $("#p2").slideDown(2000)
})