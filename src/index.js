import Game from "/src/game";

//fetch the canvas element with id "gameScreen"
let canvas = document.getElementById("gameScreen");
//method returns a drawing context on the canvas
let ctx = canvas.getContext("2d");

//Define the game border
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();

let lastTime = 0;
//like the update function in unity
//"runs each frame"
function gameLoop(timestamp) {
  //calculate deltaTime "How much time is passed"
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  //clear the screen each frame to prevent dublicating
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  game.update(deltaTime);
  game.draw(ctx);
  //when the next frame is ready; call that gameloop
  //again and pass it the timestamp
  //calculate the deltaTime and pass it to the uodate function
  requestAnimationFrame(gameLoop);
}

//call the function
requestAnimationFrame(gameLoop);
