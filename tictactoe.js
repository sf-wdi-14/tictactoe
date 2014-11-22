window.onload = function() {
  // Establish the box for the selector
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
  }
  
  // Create win condition: if 3 boxes have the same mark ...

}