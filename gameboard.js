export default function gameboardFactory(player) {
  let gameboard = buildBoard();

  function buildBoard() {
    let gameboard = [];
    for (let i = 0; i < 10; i++) {
      gameboard.push([]);
      for (let j = 0; j < 10; j++) {
        gameboard[i].push([]);
      }
    }
    return gameboard;
  }

  function getGameboard(){
    return gameboard;
  }

  function receiveAttack(x, y) {
    gameboard[x][y] = ["X"];
  }

  function returnSpace(x, y) {
    return gameboard[x][y];
  }


  return{
    boardName: player,
    getGameboard,
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
