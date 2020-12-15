export default class Ball {
  constructor(game) {
    //fetch the ball image from HTML file
    this.image = document.getElementById("img_ball");
    //ball initial position
    this.position = { x: 10, y: 10 };
    //ball initial speed
    this.speed = { x: 6, y: 2 };
    //ball size
    this.size = 30;
    //game can now be used inside any other function
    this.game = game;

    //read the game width and game height
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime) {
    console.log(this.game.paddle.position.x);
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    //collision
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }

    if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }
  }
}
