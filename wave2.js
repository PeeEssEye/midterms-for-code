function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

function draw() {
  background(0,100,200);

  let step = width/10
  stroke(0,20)
  strokeWeight(.5)
  for(let x = step/2; x < width; x += step) {
   
    let y = map(sin(frameCount + x/2), -1, 1, height/4, 3*height/4)
    fill(300,200,x)
    push()
    translate(x,y)
   // rotate(frameCount % 360)
  circle(0,0, step/2)
    pop()

    { fill(x,0,200)
    push()
    translate(x*2,y)
   // rotate(frameCount % 360)
  circle(0,0, step/2)
    pop()
    }
    {
          fill(200,0,x)
    push()
    translate(x*2,y/2)
   // rotate(frameCount % 360)
  circle(0,0, step/2)
    pop()
    }
} {
      translate(mouseX, mouseY)
       fill(0,220,0)
    rect(40,40,20,20)
    }
}