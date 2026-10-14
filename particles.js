let particles = [];

function setup() {
  createCanvas(400, 400);

  let numParticles = 150;

  for (let i = 0; i < numParticles; i++) {
    particle = new Particle();

    particles.push(particle);
  }
}

function draw() {
  background(300);

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }
}

class Particle {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;

    this.velX = random(-2, 2);
    this.velY = random(-2, 2);
    this.color = color(random(255), random(255), random(255));
    this.size = random(10, 20);
  }

  update() {
    this.x += this.velX;
    this.y += this.velY;

    {
      if (this.x > width + 10) {
        this.x = 0;
      }
      if (this.y > height + 10) {
        this.y = 0;
      }
      if (this.y < 10 - height) {
        this.y = height;
      }
      {
        if (this.x < 10 - width) this.x = 0;
      }
    }
  }

  show() {
    fill(this.color);
    circle(this.x, this.y, this.size);
  }
}
