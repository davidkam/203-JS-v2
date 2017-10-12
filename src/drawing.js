var canvas = document.getElementById("drawing");
var ctx = canvas.getContext("2d");
// This is the outer circle of smiley face
function drawHead() {
ctx.beginPath();
ctx.lineWidth=5;
ctx.arc(250, 250, 200, 0, 2 * Math.PI);
ctx.strokeStyle =  "black";
ctx.stroke();
ctx.fillStyle = "yellow";
ctx.fill();
}
function drawEye(x,y) {
  ctx.beginPath();
  ctx.arc(x, y, 25, 0, 2 * Math.PI);
  ctx.fillStyle =  "black";
  ctx.fill();
  ctx.stroke();
}
function drawCircle(x,y,size,lineWidth,strokeStyle,fillStyle) {
  ctx.beginPath();
  ctx.lineWidth=5;
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.strokeStyle =  "black";
  ctx.stroke();
  ctx.fillStyle = "yellow";
  ctx.fill();
}
// Left eye
function drawLeftEye() {
ctx.beginPath();
ctx.arc(175, 175, 25, 0, 2 * Math.PI);
ctx.fillStyle =  "black";
ctx.fill();
ctx.stroke();
}
//Right eye
function drawRightEye() {
ctx.beginPath();
ctx.arc(325, 175, 25, 0, 2 * Math.PI);
ctx.fillStyle =  "black";
ctx.fill();
ctx.stroke();
}
//Mouth smile
function drawSmile() {
ctx.beginPath();
ctx.arc(250, 250, 150, 0, 1 * Math.PI);
ctx.lineTo(400,250);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();
}

/*
drawHead();
drawLeftEye();
drawRightEye();
drawSmile();
*/
drawHead();
drawEye(175,175);
drawEye(325,175);
drawSmile();

