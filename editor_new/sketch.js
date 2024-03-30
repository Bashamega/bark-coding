let img; // Declare variable to hold the image
let x = 235; // Initial x position (centered)
let y = 175; // Initial y position (centered)
let bgColor = '#FFFFFF'; // Initial background color (white)
let angle = 0; // Initial angle for sine wave movement
const amplitude = 50; // Amplitude of the sine wave
const frequency = 0.05; // Frequency of the sine wave

function preload() {
  // Load the image from the URL then move
  img = loadImage('https://bark-coding.vercel.app/src/images/dog/idle.svg');
  basicMove();
}

function loadImg(text) {
  // Loads the image from the URL
  img = loadImage(text);
}

function setup() {
  // Create a canvas
  let cnv = createCanvas(480, 360);
  cnv.parent('stage-container'); // Attach the canvas to the stage container
}

function draw() {
  // Set the background color
  background(bgColor);

  // Draw the image at the current position
  image(img, x, y);

  // Display text above the image
  textSize(20);
  textAlign(CENTER, BOTTOM);
  fill(0);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to change the background color
function changebg(color) {
  // Set the background color to the provided color
  bgColor = color;
}

// Function for basic movement
function basicMove() {
  // Move stickman to the left by about +10 in the x-direction
  x += 5;

  // Prevent stickman from going beyond canvas boundaries
  if (x <= 0) {
    x = 0;
  }
  sleep(30);
}
function basicMoveBack() {
  // Move stickman to the left by about -10 in the x-direction
  x -= 5;

  // Prevent stickman from going beyond canvas boundaries
  if (x <= 0) {
    x = 0;
  }
  sleep(30);
}
function sineMove() {
  // Update the y position using sine wave movement
  y = 175 + amplitude * sin(angle);
  
  // Increment the angle to create the oscillating motion
  angle += frequency;
}

function gotomouse() {
  x = mouseX;
  y = mouseY;
}
