//This could probably be done much better.
//If you have suggestions to improve please do get in touch.

//Some stuff we'll need later
let video;
let poseNet;
// let noseX = 0;
// let noseY = 0;
let shoulderX = 0;
let shoulderY = 0;
let emoji = 0;
let emojiSize = 0;

//setting up our canvas to work on
function setup() {
  var canvas = createCanvas(650,480);
  canvas.parent('sketch-holder');
  video = createCapture(VIDEO);
  video.size(650,480);
  video.hide();
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose',gotPoses);
  //button to select your photo
  document.querySelector("button").addEventListener("click", function () {
    saveCanvas('myphoto.png');
  })
}

function gotPoses(poses) {
  //fetching values from posenet
  //console.log(poses);
  if (poses.length > 0){
  shoulderX = poses[0].pose.keypoints[5].position.x;
  shoulderY = poses[0].pose.keypoints[5].position.y;
  }
}

function modelReady(){
  console.log('model ready');
}

function draw() {
  background(0);
  //In case webcam is not enabled
  push();
  fill(255);
  textSize(20);
  text('Your webcam is needed for this experience',140,height/2);
  text('refresh the page and allow it to try it out. 📸',140,(height/2)+25);
  pop();

  //Image capture to place an emoji on
  image(video,0,0,650,480);
  //Emoji placement module
  emojiSize = 170;
  textSize(emojiSize);
  text('🦜',shoulderX-100,shoulderY)
}
