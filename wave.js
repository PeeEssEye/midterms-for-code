function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

function draw() {
  background(220);


let step = width/10
  stroke(0,20)
  strokeWeight(.5)
  for(let x = step/2; x < width; x += step) {
   
    let y = map(sin(frameCount + x), -1, 1, height/4, 3*height/4)
    fill(x,200,300)
    push()
    translate(x,y)
   // rotate(frameCount % 360)
  circle(0,0, step/2)
    pop()

    
  }
}