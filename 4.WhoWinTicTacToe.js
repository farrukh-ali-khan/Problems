// Tic Tac Win: Design an algorithm to figure out if someone has won a game of tic-tac-toe.

function win(arr) {
  if (
    (arr[1],
    arr[2],
    arr[3] === "X" || arr[1],
    arr[4],
    arr[7] === "X" || arr[1],
    arr[5],
    arr[9] === "X" || arr[2],
    arr[5],
    arr[8] === "X" || arr[3],
    arr[6],
    arr[9] === "X" || arr[4],
    arr[5],
    arr[6] === "X" || arr[7],
    arr[8],
    arr[9] === "X" || arr[3],
    arr[5],
    arr[7] === "X")
  ) {
    console.log("Player 1 Win");
  } else if (
    (arr[1],
    arr[2],
    arr[3] === "O" || arr[1],
    arr[4],
    arr[7] === "O" || arr[1],
    arr[5],
    arr[9] === "O" || arr[2],
    arr[5],
    arr[8] === "O" || arr[3],
    arr[6],
    arr[9] === "O" || arr[4],
    arr[5],
    arr[6] === "O" || arr[7],
    arr[8],
    arr[9] === "O" || arr[3],
    arr[5],
    arr[7] === "O")
  ) {
    console.log("Player 2 Win");
  } else {
    console.log("Draw");
  }
}
