let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");

//clear previous position of any shape
//to clear previous actions every frame as the objs move
ctx.clearRect(0, 0, 800, 600);

//style the rectangle with reed color '#f00"
ctx.fillStyle = "#f00";
//create a rectangle at pos (20,20) with W&H (100,100)
ctx.fillRect(20, 20, 100, 100);

ctx.fillStyle = "#00f";
ctx.fillRect(200, 200, 50, 50);
