const Gameboard = class {
  constructor() {
    this.board = this.buildBoard();
  }

  buildBoard() {
    let board = [];
    for (let i = 0; i < 10; i++) {
      board.push([]);
      for (let j = 0; j < 10; j++) {
        board.push([]);
      }
      return board;
    }
  }

receiveAttack(x, y){
    this.board[x][y] = ["X"];
}


};

module.exports = Gameboard;



// function buildGrid(size = 8) {
//     let board = [];
//     for (let i = 0; i < size; i++) {
//       for (let j = 0; j < size; j++) {
//         board.push([i,j]);
//       }
//     }
//     return board;
//   }