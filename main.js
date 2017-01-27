var canvas          = document.getElementById("canvas");
canvas.width        = document.body.clientWidth;
canvas.height       = document.body.clientHeight;
canvas.style.width  = canvas.width + "px";
canvas.style.height = canvas.height + "px";

var ctx             = canvas.getContext("2d");

var movement = 0;
var rect     = new Rectangle(50, 15, 50, 50);
// Create a new Rectangle

console.log(rect);


var update = function(){

	rect.x += movement;
};

var draw = function() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	rect.Draw(ctx, "red");
};

var step = function(){
	update();
	draw();

	window.requestAnimationFrame(step);

};

// call step()
step();

// Simple draw method for 30(ish) fps
// setInterval(function() {

// }, 33);