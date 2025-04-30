// import { hello, goodbye } from "./ship";
const Ship = require('./ship');
const Gameboard = require('./gameboard');

const boat = new Ship(5);
boat.hit();


test ('build ship', () => {
    expect(new Ship(5)).toMatchObject({"hits": 0, "length": 5, "sunk": false})
})

test ('hit ship', () => {
    expect(boat.hit()).toBe(2)
})

// test ('build ship', () => {
//     expect(boat).toMatchObject({"hits": 5, "length": 5, "sunk": true})
// })



const board = new Gameboard;
board.receiveAttack(1,9)

test ('hit board', () => {
    expect(board.returnSpace(1,9)).toStrictEqual(["X"])
})