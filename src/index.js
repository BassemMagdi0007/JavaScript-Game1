import Paddle from "/src/paddle";

let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

//clear previous position of any shape
//to clear previous actions every frame as the objs move
ctx.clearRect(0, 0, 800, 600);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

paddle.draw(ctx);

let lastTime = 0;

//like the update function in unity
function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, 800, 600);
  paddle.update(deltaTime);
  paddle.draw(ctx);

  //when the next frame is ready call that gameloop
  //again and pass it the timestamp
  //calculate the deltaTime and pass it to the uodate function
  requestAnimationFrame(gameLoop);
}

gameLoop();
