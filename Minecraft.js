var ballx = 300;
var bally = 300;
var ballSize = 60;
var score = 0;
var level2 = 1;
var levelscore = 0;
var stone;
var diamonds;
var Picaxe;
var death;

function preload() {
  stone = loadImage('stone.jpg');
  diamonds = loadImage('diamondd.webp');
  Picaxe = loadImage('pic.webp');
  death = loadImage('death.webp');
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
  noCursor();
} // end setup

function draw() {
  if(score < 120) {
  background(stone);        //220);
  level();
  }
  else {
    background(death); 
  }
  text("Level " + level2, width/2, 40);
  
  image(Picaxe, mouseX-20, mouseY-20, 40, 40);
  
  text(score, width-90, height-15);
  
} // end draw

function level() {
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize/2) {
    ballx = random(width);
    bally = random(height*3/4);
    score = score +1;
    levelscore = levelscore + 1;
  }
  
  if(levelscore == 10) {
    levelscore = 0;
    level2 = level2 + 1;
    ballSize-=5;
  }
  
  //ellipse(ballx, bally, ballSize, ballSize);
  image(diamonds, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  //line(ballx, bally, mouseX, mouseY);
  
}
