let particles = []

let img;

async function setup() {
  createCanvas(400, 400);

  img = await loadImage("snow.png")
}

function draw() {
  background(220);

  for(let i = 0; i < particles.length; i++) {
    particles[i].update()
    particles[i].show()
  }
}
// event listener
function mousePressed() {
  // do something when the mouse is pressed

  // we want to create a particle at the mouseX mouseY position when mouse is pressed

  particles.push(new Particle(mouseX, mouseY))
  
}

class Particle {
  constructor(xPos, yPos) {
    // position
    this.x = xPos
    this.y = yPos
    
    // velocity (for us, that means speed and direction)

    
    this.velX = random(-10, 10)
    this.velY = random(-10, 10)
    
    
    this.color = color(random(255), random(255), random(255))
    this.size = random(10, 20)
  }
  update() {
    // move the particle
    this.x += this.velX // this.x = this.x + this.velX
    this.y += this.velY

    // bounce the particle

    // RIGHT
    if(this.x > width - this.size/2) {
      this.velX = -this.velX
    }
    // LEFT
    if(this.x < this.size/2) {
      this.velX = -this.velX
    }

    // TOP
    if(this.y < this.size/2) {
      this.velY = -this.velY
    }

    // BOTTOM
    if(this.y > height - this.size/2) {
      this.velY = -this.velY
    }
  }

  show() {    
    //fill(this.color)
    //circle(this.x, this.y, this.size)
    image(img, this.x, this.y, this.size, this.size)
  }
}