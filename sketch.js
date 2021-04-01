var HOUR,MIN,SEC;
var hrAngle,minAngle,secAngle;

function setup() {
  createCanvas(600,600);

  angleMode(DEGREES);
}

function draw() {
  background("black");

 HOUR = hour();
 MIN = minute();
 SEC = second();

 hrAngle = map(HOUR % 12,0,12,0,360);
 minAngle = map(MIN,0,60,0,360);
 secAngle = map(SEC,0,60,0,360);

 push();
 strokeWeight(7);
noFill();
 translate(300,300);
//seconds
 stroke(0,0,255);
 arc(0,0,500,500,0,secAngle-90);
 
 //MINUTES
 stroke(0,255,0);
 arc(0,0,486,486,0,minAngle-90);

 //hours
 stroke(255,0,0);
 arc(0,0,472,472,0,hrAngle-90);
 pop();

  //hr hand
  push();
  translate(300,300);
  rotate(hrAngle-90);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  //min hand
  push();
  translate(300,300);
  rotate(minAngle-90);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,150,0);
  pop();

  //sec hand
  push();
  translate(300,300);
  rotate(secAngle-90);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,200,0);
  pop();

  drawSprites();

  textSize(25);
  fill("white");
  text("Time : "+HOUR % 12+" : ",310,310);
  //fill("green");
  text(MIN+" : ",420,310);
  //fill("blue");
  text(SEC,470,310);
}