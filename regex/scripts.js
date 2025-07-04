console.log("Regular Expressions");
// Using string search method
const str = "Abebe bEso beso bela!";
console.log(str.search("beso"));
// Using string search metho with regex
const regex = /beso/g;
console.log(str.search(regex));

const teta = /teta/i
console.log(str.replace(/bela/i, "teta"))

// Mathch methos with regexp
console.log(str.match("beso"))
console.log(str.match(/bE/ig))

// Test object of regexp
console.log(/be/gi.test(str)) // returns true
console.log(/teta/gi.test(str)) // returns false

// Exec object of regexp
console.log(/beso/gi.exec(str))