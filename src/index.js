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

//____________First edit_____________
/*
//style the rectangle with reed color '#f00"
ctx.fillStyle = "#f00";
//create a rectangle at pos (20,20) with W&H (100,100)
ctx.fillRect(20, 20, 100, 100);

ctx.fillStyle = "#00f";
ctx.fillRect(200, 200, 50, 50);
*/
