/*Tic Tac Toe Game */
const gameBoard = document.querySelector(".game-board");
const cells = document.querySelectorAll(".cell");
let currentPlayer = "X";

cells.forEach((cell) => {
  cell.addEventListener("click", handleCellClick);
});

function handleCellClick(event) {
  const cell = event.target;
  cell.textContent = currentPlayer;
  cell.style.display = "flex";
  cell.style.justifyContent = "center";
  cell.style.alignItems = "center";

  if (checkWin()) {
    alert(currentPlayer + " wins!");
    if (confirm("Do you want to play again?")) {
      resetBoard();
    }
  } else if (checkTie()) {
    alert("Tie game!");
    if (confirm("Do you want to play again?")) {
      resetBoard();
    }
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWin() {
  const winningCombinations = [
    [0, 1, 2], // horizontal top row
    [3, 4, 5], // horizontal middle row
    [6, 7, 8], // horizontal bottom row
    [0, 3, 6], // vertical left column
    [1, 4, 7], // vertical middle column
    [2, 5, 8], // vertical right column
    [0, 4, 8], // diagonal top left to bottom right
    [2, 4, 6], // diagonal top right to bottom left
  ];

  return winningCombinations.some((combination) => {
    return combination.every((index) => {
      return cells[index].textContent === currentPlayer;
    });
  });
}

function checkTie() {
  return Array.from(cells).every((cell) => {
    return cell.textContent !== "";
  });
}

function resetBoard() {
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.style.display = "";
    cell.style.justifyContent = "";
    cell.style.alignItems = "";
  });
  currentPlayer = "X";
}
