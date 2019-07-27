//things we'll need later
let video;
let poseNet;
// let photobutton;
let noseX = 0;
let noseY = 0;
let lefteyeX = 0;
let lefteyeY = 0;
let righteyeX = 0;
let righteyeY = 0;
let emoji = 0;


//setting up our canvas to work on
function setup() {
  textSize(20);
  var canvas = createCanvas(650,480);
  canvas.parent('sketch-holder');
  video = createCapture(VIDEO);
  video.size(650,480);
  video.hide();
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose',gotPoses);
  // photobutton = createButton('📷')
  // photobutton.position(500,620);
  // photobutton.mousePressed(savePhoto);

  //button to select your photo
  document.querySelector("button").addEventListener("click", function () {
    saveCanvas('myphoto.png');
  })
}

function gotPoses(poses) {
  //fetching values from posenet
  //console.log(poses);
  if (poses.length > 0 ){
  let emojiposX = poses[0].pose.keypoints[0].position.x;
  let emojiposY = poses[0].pose.keypoints[0].position.y;
  noseX = lerp(noseX, emojiposX, 0.5);
  noseY = lerp(noseY, emojiposY, 0.5);
  }
}

function modelReady(){
  console.log('model ready');
}

function draw() {
  background(255);

  //In case webcam is not enabled
  push();
  fill(255);
  text('Your webcam is needed for this experiment 🎥',150,height/2);
  text('refresh the page to try it out',150,(height/2)+25);
  pop();
  //Image capture to place an emoji on
  image(video,0,0,650,480);
  //Emoji placement module
  ellipse(noseX,noseY,100);
  let emojiSize = 325;
  textSize(emojiSize);
  // if (mouseIsPressed) {
  //   emoji = random();
  // }
  if (emoji < 0.06){
    text('🦁',noseX-140,noseY+110);
  } else if (emoji < 0.12) {
    text('🐶',noseX-140,noseY+110);
  } else if (emoji < 0.18) {
    text('🦊',noseX-140,noseY+110);
  } else if (emoji < 0.23) {
    text('🐱',noseX-140,noseY+110);
  } else if (emoji < 0.29) {
    text('🐵',noseX-140,noseY+110);
  } else if (emoji < 0.35) {
    text('🐯',noseX-140,noseY+110);
  } else if (emoji < 0.41) {
    text('🐮',noseX-140,noseY+110);
  } else if (emoji < 0.47) {
    text('🐷',noseX-140,noseY+110);
  } else if (emoji < 0.53) {
    text('🐭',noseX-140,noseY+110);
  } else if (emoji < 0.59) {
    text('🐹',noseX-140,noseY+110);
  } else if (emoji < 0.65) {
    text('🐰',noseX-140,noseY+110);
  } else if (emoji < 0.71) {
    text('🐻',noseX-140,noseY+110);
  } else if (emoji < 0.77) {
    text('🐼',noseX-140,noseY+110);
  } else if (emoji < 0.83) {
    text('🐲',noseX-140,noseY+110);
  } else if (emoji < 0.89) {
    text('🐸',noseX-140,noseY+110);
  } else {
    text('🌞',noseX-140,noseY+110);
  }
}
