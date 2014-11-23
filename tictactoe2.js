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
  var square;

  var clearButton = document.getElementById('clear');
  var allBoxes = document.querySelectorAll(".box"); 
  var results = document.querySelector(".result");

  boardValues = [
    	1, 4, 9,
    	16, 25, 36,
    	49, 64, 81
    	];

   solutions = [14,72,194,78,66,88,126,102,78];

  // Create an event when a box is clicked

  for (var b = 0; b < allBoxes.length; b++) {
  	allBoxes[b].onclick = function() {

  		this.innerHTML = "X";
  		this.style.color = "#fe7bff";

  		var ai = Math.floor((Math.random() * allBoxes.length) );
  		console.log(ai);
  		if (allBoxes[ai] !== "") {
  		  allBoxes[ai].innerHTML = 'O';
  		  allBoxes[ai].style.color = "#ffdb00";
  		}

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
      b1, b2, b3,
      b4, b5, b6,
      b7, b8, b9
      ];

    var scoreX;
    var scoreY;

  if (b1 === "X" && b2 === "X" && b3 === "X" || 
      b1 === "X" && b4 === "X" && b7 === "X" || 
      b1 === "X" && b5 === "X" && b9 === "X" ||
      b1 === "X" && b4 === "X" && b7 === "X" ||
      b4 === "X" && b5 === "X" && b6 === "X" ||
      b7 === "X" && b8 === "X" && b9 === "X" ||
      b7 === "X" && b5 === "X" && b3 === "X" ||
      b2 === "X" && b5 === "X" && b8 === "X" ||
      b3 === "X" && b6 === "X" && b9 === "X" ) {
      console.log("We have a winner!");
      results.innerHTML = "WE HAVE A WINNER!";
    } else if (b1 === "O" && b2 === "O" && b3 === "O" ||
				b1 === "O" && b4 === "O" && b7 === "O" ||
				b1 === "O" && b5 === "O" && b9 === "O" ||
				b1 === "O" && b4 === "O" && b7 === "O" ||
				b4 === "O" && b5 === "O" && b6 === "O" ||
				b7 === "O" && b8 === "O" && b9 === "O" ||
				b7 === "O" && b5 === "O" && b3 === "O" ||
				b2 === "O" && b5 === "O" && b8 === "O" ||
				b3 === "O" && b6 === "O" && b9 === "O" ) {
    	  console.log("You lose!");
    	  results.innerHTML = "YOU LOSE!"
  	}
      console.log(board);
  }
 
  // Check the current innerHTML of the grid for a win.
/*
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
    	b1, b2, b3,
    	b4, b5, b6,
    	b7, b8, b9
    	];
 
    if (b1 === "X" && b2 === "X" && b3 === "X" || 
    	b1 === "O" && b2 === "O" && b3 === "O" ||
    	b1 === "X" && b4 === "X" && b7 === "X" || 
    	b1 === "O" && b4 === "O" && b7 === "O" ||
    	b1 === "X" && b5 === "X" && b9 === "X" ||
		  b1 === "O" && b5 === "O" && b9 === "O" ||
		  b1 === "X" && b4 === "X" && b7 === "X" ||
		  b1 === "O" && b4 === "O" && b7 === "O" ||
		  b4 === "X" && b5 === "X" && b6 === "X" ||
		  b4 === "O" && b5 === "O" && b6 === "O" ||
		  b7 === "X" && b8 === "X" && b9 === "X" ||
		  b7 === "O" && b8 === "O" && b9 === "O" ||
		  b7 === "X" && b5 === "X" && b3 === "X" ||
		  b7 === "O" && b5 === "O" && b3 === "O" ||
		  b2 === "X" && b5 === "X" && b8 === "X" ||
		  b2 === "O" && b5 === "O" && b8 === "O" ||
		  b3 === "X" && b6 === "X" && b9 === "X" ||
		  b3 === "O" && b6 === "O" && b9 === "O" ) {
    	console.log("We have a winner!");
    }

    console.log(board);
  }
*/
  clearButton.onclick = function() {
  	for (var i = 0; i < allBoxes.length; i++) {
  	  allBoxes[i].innerHTML = "";
  	  results.innerHTML = "";
  	}
  }
}