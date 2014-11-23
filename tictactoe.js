window.onload = function() {
  // Establish the boxes for the selector
  var boxOne = document.querySelector("#b1");
  var boxTwo = document.querySelector("#b2");
  var boxThree = document.querySelector("#b3");
  var boxFour = document.querySelector("#b4");
  var boxFive = document.querySelector("#b5");
  var boxSix = document.querySelector("#b6");
  var boxSeven = document.querySelector("#b7");
  var boxEight = document.querySelector("#b8");
  var boxNine = document.querySelector("#b9");


  // Create an event when a box is clicked
  boxOne.onclick = function() {
  	if (boxOne.innerHTML === "X") {
  		boxOne.innerHTML = "O";
  	} else {
  		boxOne.innerHTML = "X";
  	}
  				// Just testing input and output!
  }
  
  boxTwo.onclick = function() {
	if (boxTwo.innerHTML === "X") {
		boxTwo.innerHTML = "O";
	} else {
		boxTwo.innerHTML = "X";
	}
}
boxThree.onclick = function() {
	if (boxThree.innerHTML === "X") {
		boxThree.innerHTML = "O";
	} else {
		boxThree.innerHTML = "X";
	}
}
boxFour.onclick = function() {
	if (boxFour.innerHTML === "X") {
		boxFour.innerHTML = "O";
	} else {
		boxFour.innerHTML = "X";
	}
}
boxFive.onclick = function() {
	if (boxFive.innerHTML === "X") {
		boxFive.innerHTML = "O";
	} else {
		boxFive.innerHTML = "X";
	}
}
boxSix.onclick = function() {
	if (boxSix.innerHTML === "X") {
		boxSix.innerHTML = "O";
	} else {
		boxSix.innerHTML = "X";
	}
}
boxSeven.onclick = function() {
	if (boxSeven.innerHTML === "X") {
		boxSeven.innerHTML = "O";
	} else {
		boxSeven.innerHTML = "X";
	}
}
boxEight.onclick = function() {
	if (boxEight.innerHTML === "X") {
		boxEight.innerHTML = "O";
	} else {
		boxEight.innerHTML = "X";
	}
}
boxNine.onclick = function() {
	if (boxNine.innerHTML === "X") {
		boxNine.innerHTML = "O";
	} else {
		boxNine.innerHTML = "X";
	}
}

  // Check the current innerHTML of the grid for a win.

  var endButton = document.getElementById('endturn');  
  endButton.onclick = function() {
    var b1 = boxOne.innerHTML,
    	b2 = boxTwo.innerHTML,
    	b3 = boxThree.innerHTML,
    	b4 = boxFour.innerHTML,
    	b5 = boxFive.innerHTML,
    	b6 = boxSix.innerHTML,
    	b7 = boxSeven.innerHTML,
    	b8 = boxEight.innerHTML,
    	b9 = boxNine.innerHTML;
  
    var board = [
    	[b1, b2, b3],
    	[b4, b5, b6],
    	[b7, b8, b9]
    	];

    if (b1 == b2 && b2 == b3) {
    	console.log(b1 + " wins!");
    } else if (b1 == b4 && b4 == b7) {
    	console.log(b1 + " wins!");
    } else if (b1 == b5 && b5 == b9) {
    	console.log(b1 + " wins!");
    } else if (b4 == b5 && b5 == b6) {
    	console.log(b4 + " wins!");
    } else if (b7 == b8 && b8 == b9) {
    	console.log(b7 + " wins!");
    } else if (b7 == b5 && b5 == b3) {
    	console.log(b7 + " wins!");
    } else if (b2 == b5 && b5 == b8) {
    	console.log(b2 + " wins!");
    } else if (b3 == b6 && b6 == b9) {
    	console.log(b3 + " wins!");
    }

    	console.log(board);
  }
  
  var clearButton = document.getElementById('clear');
  var allBoxes = document.querySelectorAll(".box");

  clearButton.onclick = function() {
  	allBoxes.innerHTML = "";
  }
}