var turns = 0,
    game = [];

var marks = function() {
  return moves % 2 === 0 ? "X" : "O";
}

window.onload = function() {
   
  var youMad = new Audio();
  youMad.src = "youmad.mp3";
  youMad.load();

  var applause = new Audio();
  applause.src = "applause.mp3";
  applause.load();

  // Create an event when a box is clicked

  var board = document.querySelectorAll(".box");
  for (var i = 0; i < board.length; i++) {
    board[i].onclick = function() {
      if (!this.innerHTML) {
        this.innerHTML = marks();
        this.classList.add(marks());
        turns++;
      }
    }
  }

  // Win conditions

  boardValues = [1, 4, 9, 16, 25, 36, 49, 64, 81];
  solutions = [14,72,194,78,66,88,126,102,78];
  xboard =[];
  oboard =[];
}