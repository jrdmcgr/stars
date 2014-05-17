function randomInt(min, max) {
	if (min === undefined) {
		min = 0;
		max = Number.MAX_SAFE_INTEGER;
	}
	if (max === undefined) {
		max = min;
		min = 0;
	}
	return Math.floor(Math.random() * max) + min;
}

function randomVector(width, height) {
	return {
		x: randomInt(0, width),
		y: randomInt(0, height)
	};
}

function Star(position, magnitude, color) {
	this.position = position;
	this.magnitude = magnitude;
	this.color = color;
}

Star.prototype.draw = function (ctx) {
	ctx.save();
	ctx.beginPath();
	ctx.arc(
		this.position.x,
		this.position.y,
		this.magnitude,
		0,
		Math.PI * 2
	);
	ctx.closePath();
	ctx.fillStyle = this.color;
	ctx.fill();
	ctx.restore();
};

// Setup canvas and context.
var canvas = document.createElement('canvas');
var height = canvas.height = outerHeight;
var width = canvas.width = outerWidth;
var ctx = canvas.getContext('2d');

// Paint the background of the cosmos.
ctx.fillStyle = '#000';
ctx.fillRect(0, 0, width, height);

// Draw 1000 random stars.
var star,
	stars = [],
	starCount = 1000,
	colors = ['#aaffaa', '#ffccaa', '#aaaaff', '#ffffff'];

while (starCount--) {
	star = new Star(
		randomVector(canvas.width, canvas.height),
		randomInt(1, 2) * Math.random(),
		colors[randomInt(0, colors.length)]
	);
	star.draw(ctx);
	stars.push(star);
}

document.body.appendChild(canvas);