let particles = []
let numParticles = 200



function setup() {
  createCanvas(400, 400);
  for(let i=0; i < numParticles; i++) {
    particles.push(new Particle())
  }
  
}

function draw() {
  background(200,2000,2000);

  for(let i = 0; i < numParticles; i++) {
  particles[i].update()
  particles[i].show()
  }
}


class Particle{
  
  

constructor () {
 this.position = createVector(random(width), random(height))
this.velocity = createVector(random(-2,2), random(-2,2))
this.accel = createVector(0, .001)
}

update()  {

    this.velocity.add(this.accel)
  this.position.add(this.velocity)

// loop around canvas

  if(this.position.x > width + 10) {
    this.position.x = 0
  }
  if(this.position.y > height + 10) {
    this.position.y = 0
  }
  if(this.position.y < 10 - height) {
    this.position.y = height
  }
  { if(this.position.x < 10 - width) 
    this.position.x = 0}
  }

show() {
circle(this.position.x, this.position.y, 10)
  
}
}