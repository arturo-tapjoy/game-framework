var canvas          = document.getElementById("canvas");
canvas.width        = document.body.clientWidth;
canvas.height       = document.body.clientHeight;
canvas.style.width  = canvas.width + "px";
canvas.style.height = canvas.height + "px";

var ctx             = canvas.getContext("2d");

// Create a new Rectangle
var rect     = new Rectangle(15, 15, 50, 50);

// Simple draw method for 30(ish) fps
setInterval(function() {

}, 33);