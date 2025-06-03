export default function gameboard(player) {
  let board = buildBoard();

  function buildBoard() {
    let board = [];
    for (let i = 0; i < 10; i++) {
      board.push([]);
      for (let j = 0; j < 10; j++) {
        board[i].push([]);
      }
    }
    return board;
  }

  function receiveAttack(x, y) {
    board[x][y] = ["X"];
  }

  function returnSpace(x, y) {
    return board[x][y];
  }


  return{
    boardName: player,
    // get isSunk() {return isSunk},
    receiveAttack,
    returnSpace
  }

}





const Gameboard = class {
  constructor() {
    this.board = this.buildBoard();
  }

  // receiveAttack(x, y){
  //     this.board[x][y] = ["X"];
  // }

  // returnSpace(x,y){
  //   return this.board[x][y];
  // }
};

// module.exports = Gameboard;

// function buildGrid(size = 8) {
//     let board = [];
//     for (let i = 0; i < size; i++) {
//       for (let j = 0; j < size; j++) {
//         board.push([i,j]);
//       }
//     }
//     return board;
//   }
