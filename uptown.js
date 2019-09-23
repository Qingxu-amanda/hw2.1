function setup() {
  createCanvas(400, 400);
  frameRate(10);
  fill(0,255,0);
}

var NMSL = 30;
var ballSpeed = 3;

var ballX2 = 370
var ballSpeed2 = 5;

var nmjwbs = 0;
var nmjwbsl = 4;

function draw() {
  background(220);
  
  fill(255, 0, 0)
  ellipse(mouseX, NMSL, 30);
  fill(0, 255, 0)
  ellipse(mouseY, ballX2, 30);

  NMSL = NMSL+ballSpeed;
  ballX2 = ballX2 + ballSpeed2;

  
  if(NMSL >= 400) {
   ballSpeed = -3;
  }
  
  if(ballX2 >=400) {
    ballSpeed2 = -5;
  }
  
  if(NMSL <= 0) {
    ballSpeed = 3;
  }
  
  if(ballX2 <=0) {
    ballSpeed2 =5
  }
  
  if(nmjwbs >=400){
    nmjwbsl = -4
  }
  
  if(nmjwbs <=0){
    nmjwbsl =4
  }

}
