var x = Math.floor((Math.random() * 100) + 1);

myButton.onclick = function() {
	if(x == answer.value) {
		alert("Correct! The number was: " + x);
		x = Math.floor((Math.random() * 100) + 1);
	} else if(answer.value < x) {
		alert("Higher!");
	} else {
		alert("Lower!");
	}
}