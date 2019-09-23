function setup() {
  createCanvas(400, 400);
  strokeCap(SQUARE);
}

function draw() {
  background(240);
  noStroke();
  
  //Red square
  fill(255, 0, 0);
  rect(0, 0, 180, 240);
  
  //Blue sqaure
  fill(0, 0, 255);
  rect(380, 240, 400, 80);
  
  //Yellow square
  fill(255, 255, 51);
  rect(180, 380, 100, 40);
  
  //Black square
  fill(0, 0, 0);
  rect(280, 380, 100, 40);
  
  stroke(0);
  strokeWeight(11);
  
  //left line
  line(180, 0, 180, 400);
  
  //middle line
  line(0, 240, 400, 240);
  
  //bottom line
  strokeWeight(11);
  line(180, 380, 380, 380);
  
  //right line
  line(380, 240, 380, 400);
  
  //right right line
  line(380, 240, 380, 320);
  
  //right short line
  line(380, 320, 400, 320);
  

}
