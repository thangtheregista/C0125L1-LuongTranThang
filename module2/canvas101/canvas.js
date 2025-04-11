let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");

// Set the canvas size to fill the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/**
 * The fillRect() is going to take whatever fillStyle before it
 */
c.fillStyle= "red"; // Set the fill color to red
c.fillRect(0, 0, 100, 100); // Fill a rectangle at top left with 100x100 size
c.fillStyle = "green"; // Set the fill color to green
c.fillRect(100, 100, 100, 100); // Fill a rectangle at (100, 100) with 100x100 size

//Line
c.beginPath();
c.moveTo(50, 300); // Move the pen to (50, 300)
c.lineTo(300, 100); // Draw a line to (300, 100)
c.lineTo(400, 300); // Draw a line to (400, 300)
c.strokeStyle = "blue"; // Set the stroke color to blue
c.stroke() // Apply the stroke to the line

//Arc / Circle
c.arc(0,0, 50, 0, Math.PI * 2, false); // Draw a circle at (0, 0) with radius 50