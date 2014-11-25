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
  

  var clearButton = document.getElementById('clear');
  var allBoxes = document.querySelectorAll(".box"); 
  var results = document.querySelector(".result");
  var fro = "<img src=\"tictacfro2.png\">";
  
  var youMad = new Audio();
  youMad.src = "youmad.mp3";
  youMad.load();

  var applause = new Audio();
  applause.src = "applause.mp3";
  applause.load();

  boardValues = [1, 4, 9, 16, 25, 36, 49, 64, 81];
  solutions = [14,72,194,78,66,88,126,102,78];
  
  // Create an event when a box is clicked

  for (var b = 0; b < allBoxes.length; b++) {
    allBoxes[b].onclick = function() {
      var current = {
        xx: "0",
        o: 0,
        fro: 0
      };
      
      this.innerHTML = "X";
      this.style.color = "#fe7bff";
      
      if (this.innerHTML === "X") {
        console.log(boardValues[b]);
        current.xx += boardValues[b];
      } else if (this.innerHTML === "O") {
        current.o += boardValues[b];
      } else if (this.innerHTML === fro) {
        current.fro += boardValues[b];
      }
      console.log(current);

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
      var scoreX = 0, 
      		scoreO = 0;
      function addScoreX() {
      	scoreX += 1000;
      	document.getElementById("scorex").innerHTML = scoreX;

      	scoreO -= 500;
      	document.getElementById("scoreo").innerHTML = scoreO;
      }

      function addScoreO() {
      	scoreO += 1000;
      	document.getElementById("scorex").innerHTML = scoreX;

      	scoreX -= 500;
      	document.getElementById("scoreo").innerHTML = scoreO;
      }

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
        results.innerHTML = "WE HAVE A WINNER!";
      	new Audio('applause.mp3').play();
        addScoreX();

      } else if (b1 === "O" && b2 === "O" && b3 === "O" ||
	   	  b1 === "O" && b4 === "O" && b7 === "O" ||
	   	  b1 === "O" && b5 === "O" && b9 === "O" ||
	   	  b1 === "O" && b4 === "O" && b7 === "O" ||
	   	  b4 === "O" && b5 === "O" && b6 === "O" ||
	   	  b7 === "O" && b8 === "O" && b9 === "O" ||
	   	  b7 === "O" && b5 === "O" && b3 === "O" ||
	   	  b2 === "O" && b5 === "O" && b8 === "O" ||
	   	  b3 === "O" && b6 === "O" && b9 === "O" ) {
      	results.innerHTML = "YOU LOSE!";
      	addScoreO();
     } else if (b1 === fro && b2 === fro && b3 === fro ||
	   	  b1 === fro && b4 === fro && b7 === fro ||
	   	  b1 === fro && b5 === fro && b9 === fro ||
	   	  b1 === fro && b4 === fro && b7 === fro ||
	   	  b4 === fro && b5 === fro && b6 === fro ||
	   	  b7 === fro && b8 === fro && b9 === fro ||
	   	  b7 === fro && b5 === fro && b3 === fro ||
	   	  b2 === fro && b5 === fro && b8 === fro ||
	   	  b3 === fro && b6 === fro && b9 === fro ) {
      	results.innerHTML = "YOU LOSE!";
      	new Audio('youmad.mp3').play();
      	addScoreO();
     } 

      
  }

// Clear the game board and start over.
  clearButton.onclick = function() {
  	for (var i = 0; i < allBoxes.length; i++) {
  	  allBoxes[i].innerHTML = "";
  	  results.innerHTML = "";
  	}
  }
} }
