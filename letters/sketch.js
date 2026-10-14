let letters = ["G", "C", "I", "S", "M"];
let letter
function setup() {
  createCanvas(400, 400);
  letter = random(letters)
}

function draw() {
  background(220);

  textSize(40);
  text(letter, width / 2, height / 2);
}

function mousePressed() {
 letter = random(letters);
}
