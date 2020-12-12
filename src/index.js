import Paddle from "/src/paddle";
import InputHandler from "/src/input";

let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

//clear previous position of any shape
//to clear previous actions every frame as the objs move
ctx.clearRect(0, 0, 800, 600);

//instantiate an instance of class Paddle
let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
paddle.draw(ctx);
//instantiate the InputHandler
new InputHandler(paddle);

let lastTime = 0;
//like the update function in unity
//"runs each frame"

function gameLoop(timestamp) {
  //calculate deltaTime "How much time is passed"
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  //clear the screen each frame to prevent dublicating
  ctx.clearRect(0, 0, 800, 600);
  //updates the paddle movement
  paddle.update(deltaTime);
  //draws the paddle in its new position
  paddle.draw(ctx);

  //when the next frame is ready; call that gameloop
  //again and pass it the timestamp
  //calculate the deltaTime and pass it to the uodate function
  requestAnimationFrame(gameLoop);
}

//call the function
gameLoop();
