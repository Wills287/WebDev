var createdTime;	// Records time when displaying a shape
var clickedTime;	// Records time when shape is clicked
var reactionTime;	// Compares clicked and created times

/* When shape is clicked: record time and compare to when it was created, hide
the shape, display the reaction time to the player and set up the creation of
the next shape
*/
box.onclick = function() {
	clickedTime = Date.now();
	
	reactionTime = (clickedTime - createdTime)/1000
	
	this.style.display="none";
	
	time.innerHTML = reactionTime;
	
	makeBox();
}

/* Create a shape using several functions to randomise properties of the shape,
record the time and display the box after waiting a random amount of time up to
5 seconds
*/
function makeBox() {
	setTimeout(function() {
		box.style.top = getRandomPosition();
		box.style.left = getRandomPosition();
		box.style.backgroundColor = getRandomColor();
		box.style.borderRadius = getRandomShape();
		createdTime = Date.now();
		box.style.display="block";
	}, Math.floor((Math.random() * 5000) + 1));
}

/* Return a randomised HTML color code
*/
function getRandomColor() {
	var letters = "0123456789ABCDEF".split("");
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.round(Math.random() * 15)];
	}
	return color;
}

/* Return a randomly selected box or circle
*/
function getRandomShape() {
	if (Math.random()> 0.5) {
		return "0%";
	} else {
		return "50%";
	}
}

/* Return a random number up to 500 for positioning of the shape
*/
function getRandomPosition() {
	return (Math.floor((Math.random() * 500) + 1) + "px")
}

/* Calls the makeBox function in order to start the game
*/
makeBox();