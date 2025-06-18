// Adding jQuery library to our web page
// • There are two ways to include jQuery into your HTML
// o You can download the latest version, save it locally in your computer and include
// it in your HTML’s <header> using a simple <script > tag. Link to offcicial jQuery
// website:
// ▪ https://jquery.com/download/
// o Including jQuery from a CDN and adding it right before the closing </body> in
// <script> tag. Note: Your jQuery CDN needs to be placed before your custom
// JavaScript file
console.log("jQuery")
const logParagraph = $("#myParagraph")
console.log(logParagraph) // logs my paragraph

// ▪ Example: of selecting class using jquery
var logDiv = $(".myDiv");
console.log(logDiv);// logs the two divs with

// Example: select using element name
console.log($("span"));// returns our <span> element 

// $("li").even().css("background", "yellow")
// $("li").odd().css("background", "purple")

$("ul li:nth-child(2)").css("background", "lightgreen")

$("h2").has("p").css("color", "lightgreen")

$("ul:contains(First list item)").css("background-color", "pink");

$(".divi").empty()

$("ul li:nth-child(5)").hide()

$("span").show()