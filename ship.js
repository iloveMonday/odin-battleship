//factory function
export default function ship(name, length, position){
  let hitCounter = 0;
  let isSunk = false;

  function hitIncrementor(){
    hitCounter++
    if (hitCounter >= length){
      isSunk = true;
    }
  }


  function getHitCounter(){
    return hitCounter;
  }

  function getShipStatus(){
    return isSunk;
  }


  return{
    shipName: name,
    get isSunk() {return isSunk},
    shipLength: length,
    shipPosition: position,
    hitIncrementor,
    getHitCounter,
    getShipStatus
  }
}


////////////////////////CLASS/////////////////

// const Ship = class {
//     constructor(length) {
//       this.length = length;
//       this.hits = 0;
//       this.sunk = false;
//       // this.coordinates = [];

//       return this;
//     }

//     hit(){
//         this.hits++;
//         return this.hits;
//     }

//     isSunk(){
//         if (this.hits == this.length){
//             this.sunk = true;
//             return this.sunk
//         }
//     }
//   };

// module.exports = Ship
