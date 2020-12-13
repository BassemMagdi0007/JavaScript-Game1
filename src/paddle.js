export default class Paddle {
  /* 
  a constructor enables you to provide any custom initialization 
  that must be done before any other methods can be called on an instantiated object.
  */
  constructor(game) {
    //didn't need gameHeight since the paddle only move on the x axis hence would collide with the 'width' border
    this.gameWidth = game.gameWidth;
    //the paddle width
    this.width = 150;
    //the paddle height
    this.height = 20;
    //the max speed of the paddle
    this.maxSpeed = 7;
    //the current speed of the paddle 'initial speed'
    this.speed = 0;

    //the initial position of the paddle
    this.position = {
      x: game.gameWidth / 2 - this.width / 2,
      y: game.gameHeight - this.height - 10
    };
  }

  moveLeft() {
    //it will be moving negative 10 pixels per second (pps)
    this.speed = -this.maxSpeed;
  }

  moveRight() {
    //it will be moving negative 10 pixels per second (pps)
    this.speed = this.maxSpeed;
  }

  stop() {
    this.speed = 0;
  }

  draw(ctx) {
    ctx.fillStyle = "#0ff";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  //handle the movement on each frame
  update(deltaTime) {
    this.position.x += this.speed;

    //collide with left border
    if (this.position.x < 0) this.position.x = 0;
    //collide with the left border
    if (this.position.x + this.width > this.gameWidth) {
      this.position.x = this.gameWidth - this.width;
    }
  }
}
