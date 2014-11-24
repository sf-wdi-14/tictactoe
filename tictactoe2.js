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

  // Create an event when a box is clicked

  for (var b = 0; b < allBoxes.length; b++) {
  	allBoxes[b].onclick = function() {

  		this.innerHTML = "X";
  		this.style.color = "#fe7bff";

  // Add some competition
  		var ai = Math.floor((Math.random() * allBoxes.length) );
  		console.log(ai);
  		if (allBoxes[ai] !== "") {
  		  allBoxes[ai].innerHTML = "";
  		  allBoxes[ai].style.color = "#ffdb00";
  		} else {
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
  // Keep score	
      var scoreX = document.querySelector("scorex");
      var scoreO = document.querySelector("scoreO");
  // Check for win conditions
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
      	results.innerHTML = "YOU LOSE!";
     } 
      console.log(board);
  }

// Clear the game board and start over.
  clearButton.onclick = function() {
  	for (var i = 0; i < allBoxes.length; i++) {
  	  allBoxes[i].innerHTML = "";
  	  results.innerHTML = "";
  	}
  }
} }