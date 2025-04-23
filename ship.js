const Ship = class {
    constructor(length) {
      this.length = length;
      this.hits = 0;
      this.sunk = false;

      return this;
    }

    hit(){
        this.hits++;
        return this.hits;
    }

    isSunk(){
        if (this.hits == this.length){
            this.sunk = true;
            return this.sunk
        }
    }
  };

module.exports = Ship
