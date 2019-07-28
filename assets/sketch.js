function setup() {
  var canvas = createCanvas(windowWidth-250,400);
  canvas.parent('sketch-holder');
  textSize(20);
}

function draw() {
  fill(random(255));
  text('The internet should be more fun',mouseX,mouseY);
  text("don't you think?",mouseX,mouseY+20);
}

function mousePressed(){
  background(255);
}
