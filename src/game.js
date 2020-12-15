import Paddle from "/src/paddle";
import InputHandler from "/src/input";
import Ball from "/src/ball";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    //instantiate an instance of class Ball
    this.ball = new Ball(this);
    //instantiate an instance of class Paddle
    this.paddle = new Paddle(this);

    this.gameObjects = [this.ball, this.paddle];

    //instantiate the InputHandler
    new InputHandler(this.paddle);
  }

  update(deltaTime) {
    /*
    this.paddle.update(deltaTime);
    this.ball.update(deltaTime);
    */

    this.gameObjects.forEach((object) => object.update(deltaTime));
  }

  draw(ctx) {
    /*
    this.paddle.draw(ctx);
    this.ball.draw(ctx);
    */

    this.gameObjects.forEach((object) => object.draw(ctx));
  }
}
