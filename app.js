// USING WEB ANIMATIONS API

var rotatingSquare = document.getElementById("web-animation").animate(
	[
		// keyframes:
		{ backgroundColor: '#000000', opacity: 1.0, transform: 'rotate(0deg) translate3D(0, 0, 0)' },
		{ backgroundColor: '#440000', opacity: 0.3 },
		{ backgroundColor: '#000000', opacity: 1.0, transform: 'rotate(360deg) translate3D(0, 0, 0)' }
	],
	{
		duration: 500,
		iterations: Infinity,
		easing: 'ease-in-out'
	}
)


// ============================================================

// USING CANVAS FOR ANIMATION

/*

var canvas = document.getElementById("animated-canvas");
var context = canvas.getContext("2d"); // 2d or webGL
var canvasInterval = requestAnimationFrame(canvasAnimation);
var circleX = 60;
var velocity = 1;
var acceleration = 0.5;

var posY = canvas.height / 2;

// randomizer
function makeRandom(n){
	return Math.floor(Math.random() * Math.floor(n));
}

function canvasAnimation(){
	circleX++;
	//drawCircle(circleX, canvas.height / 2, 25);
	drawCircle(circleX, posY, 25);
	canvasInterval = requestAnimationFrame(canvasAnimation);
}

function drawCircle(x, y, s){
	//clearCanvas();
	//context.globalCompositeOperation = "difference";
	context.globalCompositeOperation = "screen";
	context.fillStyle = "crimson";
	context.beginPath();
	// x, y, radius, start angle, end angle
	context.arc(x, y, s, 0, 2 * Math.PI);
	context.fill();

	velocity = velocity + acceleration;
	circleX = circleX + velocity;

	if(circleX > canvas.width){
		//circleX = 0;
		//velocity = 1;

		// randomizing position and velocity of the circle
		circleX = makeRandom(canvas.width);
		velocity = makeRandom(3);
		posY = makeRandom(canvas.height);
	}
}

function clearCanvas(){
	// clear everything in the canvas
	context.clearRect(0, 0, canvas.width, canvas.height);
}

drawCircle();

*/

// ============================================================

// ANIMATION BY MANIPULATING DOM ELEMENTS

/*

var ol = 0; // original location
var isPlaying = false;
var circleInterval;

var el = document.getElementById("circle");
var sc = 1; // scale

function circleAnimation(time){
	ol++; // increment location
	sc++; // increment scale
	el.style.left = ol + "px"; // circle moves
	el.style.width = sc + "px"; // increasing width
	el.style.height = sc + "px"; // increasing height
	el.style.borderRadius = sc*100 + "px"; // increasing border radius
	circleInterval = requestAnimationFrame(circleAnimation);
}

function mouseClicked(){
	if(isPlaying){
		isPlaying = false;
		document.getElementById("circle").style.backgroundColor = "dimgrey";
		cancelAnimationFrame(circleInterval);
	} else{
		isPlaying = true;
		document.getElementById("circle").style.backgroundColor = "crimson";
		circleInterval = requestAnimationFrame(circleAnimation);
	}
}

// listens for mouse click event
document.getElementById("circle").addEventListener("click", mouseClicked);

document.getElementById("circle").style.backgroundColor = "dimgrey";
*/
