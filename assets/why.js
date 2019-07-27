function setup() {
  createCanvas(100, 50);
  textSize(20);
  let words = ['apple', 'bear', 'cat', 'dog'];
  let word = random(words); // select random word
}

function draw() {
  background(255);
  fill(0);
  text(word, 10, 50); // draw the word
}

function mousePressed(){
  print(word);
}
