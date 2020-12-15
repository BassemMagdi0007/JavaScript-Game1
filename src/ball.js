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
    //console.log(this.game.paddle.position.x);
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    //collision
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }

    if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

    //collision would be with the bottom of the ball
    let bottomOfBall = this.position.y + this.size;
    //collision would be with the top of the paddle
    let topOfPaddle = this.game.paddle.position.y;
    //since the position.x indicates the first pixel of the paddle on the x axis
    let leftSideOfPaddle = this.game.paddle.position.x;
    //position.x + paddle.width would get the end pixel of the paddle
    let rightSideOfPaddle =
      this.game.paddle.position.x + this.game.paddle.width;

    //collision between ball and paddle check
    //cond1 => check if bottomOfBall reached the topOfPaddle height
    //cond2 && cond3 => check if the ball touches the paddle between
    //its first pixel and its last pixel (touches the paddle itself)
    if (
      bottomOfBall >= topOfPaddle &&
      this.position.x >= leftSideOfPaddle &&
      this.position.x + this.size <= rightSideOfPaddle
    ) {
      //reverse the direction
      this.speed.y = -this.speed.y;
      //allow the ball to touch the paddle as its end point
      this.position.y = this.game.paddle.position.y - this.size;
    }
  }
}
