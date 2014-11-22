window.onload = function() {
  // Establish the box for the selector
  var boxOne = document.querySelector("#b1");
  var boxOne = document.querySelector("#b2");
  var boxOne = document.querySelector("#b3");
  var boxOne = document.querySelector("#b4");
  var boxOne = document.querySelector("#b5");
  var boxOne = document.querySelector("#b6");
  var boxOne = document.querySelector("#b7");
  var boxOne = document.querySelector("#b8");
  var boxOne = document.querySelector("#b9");


  /* var box = document.querySelectorAll(".box"); 
     for (var i = 0; i < box.length; i++) {
     	box[i].onclick = function() {
     		if (boxOne.innerHTML === "X") {
	        boxOne.innerHTML = "O";
         } else {
	        boxOne.innerHTML = "X";
         }
     	}
  }; */
  
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