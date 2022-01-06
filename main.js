function preload() {

}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(150, 150);
  video = createCapture(VIDEO);
  video.hide();

}

function draw() {
  image(video, 230, 150, 220, 200);

  fill(255, 0, 0);
  stroke(255, 0, 0);
  circle(40, 50, 80);
  circle(120, 50, 80);
  circle(200, 50, 80);
  circle(280, 50, 80);
  circle(360, 50, 80);
  circle(440, 50, 80);
  circle(520, 50, 80);
  fill(123,213,321);
  circle(40, 125, 80);
  circle(40, 200, 80);
  circle(40, 280, 80);
  circle(40, 360, 80);
  circle(40, 440, 80);
  fill(255,0,0);
  circle(520, 440, 80);
  circle(440, 440, 80);
  circle(360, 440, 80);
  circle(280, 440, 80);
  circle(200, 440, 80);
  circle(120, 440, 80);
  circle(40, 440, 80);
   fill(123,213,321);
  circle(520, 125, 80);
  circle(520, 200, 80);
  circle(520, 280, 80);
  circle(520, 360, 80);
  circle(520, 440, 80);
  
}



function take_snapshot(){    
  save('student_name.png');
}