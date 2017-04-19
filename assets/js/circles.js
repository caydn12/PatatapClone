var circles = [];

// Sound source locations
var soundLoc = "assets/sounds/";

// Key data
var keyData = {
	a: {
		color: "red",
		sound: new Howl({
		src: [soundLoc + "bubbles.mp3"]
		})
	},
	b: {
		color: "yellow",
		sound: new Howl({
		src: [soundLoc + "clay.mp3"]
		})
	},
	c: {
		color: "orange",
		sound: new Howl({
		src: [soundLoc + "confetti.mp3"]
		})
	},
	d: {
		color: "purple",
		sound: new Howl({
		src: [soundLoc + "corona.mp3"]
		})
	},
	e: {
		color: "green",
		sound: new Howl({
		src: [soundLoc + "dotted-spiral.mp3"]
		})
	},
	f: {
		color: "blue",
		sound: new Howl({
		src: [soundLoc + "flash-1.mp3"]
		})
	},
	g: {
		color: "pink",
		sound: new Howl({
		src: [soundLoc + "flash-2.mp3"]
		})
	},
	h: {
		color: "cyan",
		sound: new Howl({
		src: [soundLoc + "flash-3.mp3"]
		})
	},
	i: {
		color: "magenta",
		sound: new Howl({
		src: [soundLoc + "glimmer.mp3"]
		})
	},
	j: {
		color: "brown",
		sound: new Howl({
		src: [soundLoc + "moon.mp3"]
		})
	},
	k: {
		color: "white",
		sound: new Howl({
		src: [soundLoc + "pinwheel.mp3"]
		})
	},
	l: {
		color: "red",
		sound: new Howl({
		src: [soundLoc + "piston-1.mp3"]
		})
	},
	m: {
		color: "yellow",
		sound: new Howl({
		src: [soundLoc + "piston-2.mp3"]
		})
	},
	n: {
		color: "orange",
		sound: new Howl({
		src: [soundLoc + "prism-1.mp3"]
		})
	},
	o: {
		color: "purple",
		sound: new Howl({
		src: [soundLoc + "prism-2.mp3"]
		})
	},
	p: {
		color: "green",
		sound: new Howl({
		src: [soundLoc + "prism-3.mp3"]
		})
	},
	q: {
		color: "pink",
		sound: new Howl({
		src: [soundLoc + "splits.mp3"]
		})
	},
	r: {
		color: "cyan",
		sound: new Howl({
		src: [soundLoc + "squiggle.mp3"]
		})
	},
	s: {
		color: "magenta",
		sound: new Howl({
		src: [soundLoc + "strike.mp3"]
		})
	},
	t: {
		color: "brown",
		sound: new Howl({
		src: [soundLoc + "suspension.mp3"]
		})
	},
	u: {
		color: "white",
		sound: new Howl({
		src: [soundLoc + "timer.mp3"]
		})
	},
	v: {
		color: "red",
		sound: new Howl({
		src: [soundLoc + "ufo.mp3"]
		})
	},
	w: {
		color: "yellow",
		sound: new Howl({
		src: [soundLoc + "veil.mp3"]
		})
	},
	x: {
		color: "orange",
		sound: new Howl({
		src: [soundLoc + "wipe.mp3"]
		})
	},
	y: {
		color: "purple",
		sound: new Howl({
		src: [soundLoc + "zig-zag.mp3"]
		})
	},
	z: {
		color: "green",
		sound: new Howl({
		src: [soundLoc + "moon.mp3"]
		})
	}
};

// Generate hue change each frame
function onFrame(event) {
	for (var i = 0; i < circles.length; i++) {
		circles[i].fillColor.hue += 2;
		circles[i].scale(.9);
	}
}

// Keydown function
function onKeyDown(event) {
	if (keyData[event.key]) {
		// Create circle location
		var maxPoint = new Point(view.size.width, view.size.height);
		var randomPoint = Point.random(); // Point(0, 0) - Point (1, 1)
		var point = maxPoint * randomPoint;

		// Create the circle
		var newCircle = new Path.Circle(point, 500);
		newCircle.fillColor = keyData[event.key].color;

		// Play the sound
		keyData[event.key].sound.play();

		// Add circle to array of circles
		circles.push(newCircle);
	}
}