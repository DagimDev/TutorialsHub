console.log("Regular Expressions");
// Using string search method
const str = "Abebe beso bela!";
console.log(str.search("beso"));
// Using string search metho with regex
const regex = /beso/g;
console.log(str.search(regex));

const teta = /teta/i
console.log(str.replace(/bela/i, "teta"))