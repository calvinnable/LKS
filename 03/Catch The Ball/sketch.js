//variables 
let x = 300;
let y = 0;
let score = 0;
let speed = 2;
let screen = 0;

function setup() {
  createCanvas(600, 400);
}

//which screen to display
function draw() {
  background(0);
  
  if (screen === 0) {
    startScreen();
  }
  if (screen === 1) {
    startGame();
  }
  if (screen === 2) {
    endGame();
  }
}

//what happens when you tap on the canvas 
function mousePressed() {
  if (screen === 0) {
    screen = 1;
  }
  if (screen === 2) {
    screen = 0;
  }
}

//what to display at the start
function startScreen() {
  background(69);
  fill(255);
  textAlign(CENTER);
  textSize(20);
  text("Welcome To The Game!", width / 2, height / 2);
  text("Click To Start", width / 2, height / 2 + 30);

  restart();
}

//Function for the game
function startGame() {
  //rectangle 
  background(0);
  rectMode(CENTER);
  fill(255);
  rect(mouseX, height - 20, 30,30);  

  //score text
  fill(255);
  noStroke();
  textStyle(NORMAL);
  text("Score: " + score, 50, 20);

//change the y value
  y += speed;

  //circle 
  fill(255);
  stroke(255);
  strokeWeight(5);
  circle(x, y,25);

  //screen to display when the ball goes out of the canvas
  if (y > height) {
    screen = 2;
  }
  //Area for the ball to collide and reverse direction
  if (y > height - 30 && x > mouseX - 20 && x < mouseX + 20) {
    y = 0;
    score++;
    speed += 0.5;
    x = random(width);
  }
}

//endgame screen 
function endGame() {
  background(255, 0, 0);
  noStroke();
  textAlign(CENTER);
  text("Lol You Lost", width / 2, height / 2);
  text("Score :" + score, width / 2, height / 2 + 20);
  text("Click To Play Again", width / 2, height / 2 + 40);
}

//restart function 
function restart() {
  y = 0;
  speed = 2;
  score = 0;
}