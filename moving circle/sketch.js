let x = 0;
let speed = 10;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

function draw() {
  background(220);
text(round(frameCount/10, 20,20))

  let x = map(sin(frameCount), -1, 1, 0, width)
 // print(sin(frameCount))
  circle(x, height/2, 100, 100)

}