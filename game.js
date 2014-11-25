var moves = 0;

var results = document.querySelector(".result");

var marker = function() {
  return moves % 2 === 0 ? "X" : "O"
}

window.onload = function() {

// Win conditions and checks
  var gameState = new Array(9);
  
  var gameBoard = document.querySelectorAll(".box");
  for (var i=0;i<gameBoard.length; i++) {
      gameBoard[i].onclick = function(event){
        if (!this.innerHTML) {
          this.innerHTML= marker() ;
          this.classList.add(marker());
          moves++;
        }
      }  
  }
 
}