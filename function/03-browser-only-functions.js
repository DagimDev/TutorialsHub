// 1. Dialog Boxes
// alert()
// Shows a popup message.

alert("Warning!");
confirm()
// Shows a yes/no dialog, returns true/false.

if (confirm("Delete?")) // { /* ... */ }
prompt()
// Asks for user input, returns the entered string.

const name = prompt("Your name?");

// 2. Event Scheduling
requestAnimationFrame() // (Optimized for animations)

function animate() {
  console.log("Frame");
  requestAnimationFrame(animate);
}
animate();
