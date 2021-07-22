class Player {
  constructor() {
    this.size = 150;
    this.x = 20;
    this.y = height - this.size;
    this.velocity = 0;
    this.gravity = 2;
  }
  jump() {
    if (this.y == height - this.size) {
      this.velocity = -40;
    }
  }
  move() {
    this.y = this.y + this.velocity;
    this.velocity += this.gravity;
    this.y = constrain(this.y, 0, height - this.size);
  }
  show() {
    image(playerImage, this.x, this.y, this.size - 50, this.size);
  }
  collided(currentObs) {
    let isColliding = collideRectRect(
      this.x,
      this.y,
      this.size,
      this.size,
      currentObs.x,
      currentObs.y,
      currentObs.size,
      currentObs.size
    );
    return isColliding;
  }
}
