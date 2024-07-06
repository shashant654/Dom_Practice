let currentPlayer = "x";

let gameState = ["", "", "", "", "", "", "", "", ""];

let winnerDeclared = false


const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// handle my click
// initialize
// check for winner
// check for draw

function handleClick() {
  let td = event.target;
  console.log(td);
  let index = td.getAttribute("index");
  if (td.innerText == "") {
    td.innerText = currentPlayer;
    gameState[index] = currentPlayer;
  }

  checkWinner();
  checkDraw()
  changePlayer();
}

function changePlayer() {
  currentPlayer = currentPlayer == "x" ? "o" : "x";
}

function checkWinner() {
  for (let i = 0; i < 8; i++) {
    var a = winConditions[i][0];
    var b = winConditions[i][1];
    var c = winConditions[i][2];

    if(gameState[a] == currentPlayer && gameState[b] == currentPlayer && gameState[c] == currentPlayer){
          winnerDeclared = true;
          winner.innerText = "Winner is "+ currentPlayer
    }


  }
}

function checkDraw(){
          if(!gameState.includes('') && winnerDeclared == false){
                    winner.innerText = "Game is tied"
          }
}

function init() {
  var tdCeils = document.getElementsByTagName("td");
  console.log(tdCeils);
  for (let i = 0; i < 9; i++) {
    tdCeils[i].addEventListener("click", handleClick);
  }
}

init();
