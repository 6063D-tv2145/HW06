let phrase = "That's when you're supposed to find yourself. Start drinking whiskey from a higher shelf. Stop calling your mom for help.";
let words;
let smallTextSize = 38;
let largeTextSize = 150;
let currentX, currentY;
let wordIndex = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
  background(255, 250, 245);

  words = phrase.split(" ");
  currentX = width / 2;
  currentY = height / 2;
  wordIndex = 0;
  frameRate(5);
}

function preload() {
  myFont1 = loadFont('ChronicleDeck-Black.otf');
  myFont2 = loadFont('ChronicleDisp-Light.otf');
}

function draw() {
  textFont(myFont1);
  fill(47, 55, 202);
  textSize(largeTextSize);
  text("29", width / 2, height / 2);

  textFont(myFont2);
  textSize(smallTextSize);
  fill("black");

  if (wordIndex < words.length) {
    let nextWord = words[wordIndex];

    // Create a circle w/ words
    let radius = 430;
    let angle = map(wordIndex, 0, words.length, 270, 360+270);
    currentX = width / 2 + cos(angle) * radius;
    currentY = height / 2 + sin(angle) * radius;

    text(nextWord, currentX, currentY);
    wordIndex++;
  }
}

function mouseClicked() {
  background(255, 250, 245);
  wordIndex = 0;
}
