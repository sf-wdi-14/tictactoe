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

  // Create an event when a box is clicked

  boxOne.onclick = function() {
    if (boxOne.innerHTML === "X") {
      boxOne.innerHTML = "O";
  	  this.style.color = "#99ce05";
    } else {
      boxOne.innerHTML = "X";
      this.style.color = "#48dfff";
    }
  }
  
  boxTwo.onclick = function() {
	  if (boxTwo.innerHTML === "X") {
        boxTwo.innerHTML = "O";
        this.style.color = "#99ce05";
      } else {
        boxTwo.innerHTML = "X";
        this.style.color = "#48dfff";
      }
  }
  boxThree.onclick = function() {
  	if (boxThree.innerHTML === "X") {
  		boxThree.innerHTML = "O";
      this.style.color = "#99ce05";
  	} else {
  		boxThree.innerHTML = "X";
      this.style.color = "#48dfff";
  	}
  }
  boxFour.onclick = function() {
  	if (boxFour.innerHTML === "X") {
  		boxFour.innerHTML = "O";
      this.style.color = "#99ce05";
  	} else {
  		boxFour.innerHTML = "X";
      this.style.color = "#48dfff";
  	}
  }
  boxFive.onclick = function() {
  	if (boxFive.innerHTML === "X") {
  		boxFive.innerHTML = "O";
      this.style.color = "#99ce05";
  	} else {
  		boxFive.innerHTML = "X";
      this.style.color = "#48dfff";
  	}
  }
  boxSix.onclick = function() {
  	if (boxSix.innerHTML === "X") {
  		boxSix.innerHTML = "O";
      this.style.color = "#99ce05";
  	} else {
  		boxSix.innerHTML = "X";
      this.style.color = "#48dfff";
  	}
  }
  boxSeven.onclick = function() {
  	if (boxSeven.innerHTML === "X") {
  		boxSeven.innerHTML = "O";
      this.style.color = "#99ce05";
  	} else {
  		boxSeven.innerHTML = "X";
      this.style.color = "#48dfff";
  	}
  }
  boxEight.onclick = function() {
  	if (boxEight.innerHTML === "X") {
  		boxEight.innerHTML = "O";
      this.style.color = "#99ce05";
  	} else {
  		boxEight.innerHTML = "X";
      this.style.color = "#48dfff";
  	}
  }
  boxNine.onclick = function() {
  	if (boxNine.innerHTML === "X") {
  		boxNine.innerHTML = "O";
      this.style.color = "#99ce05";
  	} else {
  		boxNine.innerHTML = "X";
      this.style.color = "#48dfff";
  	}
  }

  // What happens when someone wins?

  var winParty;



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
      results.innerHTML ="WE HAVE A WINNER!";
    }

    console.log(board);
  }

  clearButton.onclick = function() {
  	for (var i = 0; i < allBoxes.length; i++) {
  	  allBoxes[i].innerHTML = "";
      results.innerHTML = "";
  	}
  }
}