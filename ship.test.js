import shipFactory from './ship';
import gameboardFactory from './gameboard';


test('hit incrementor', () => {
    let battleShip = shipFactory('Battlehsip', 4);
    battleShip.hitIncrementor();
    battleShip.hitIncrementor();
    expect(battleShip.getHitCounter()).toBe(2);
})

test('ship sinker', () => {
    let battleShip = shipFactory('Battlehsip', 4);
    battleShip.hitIncrementor();
    battleShip.hitIncrementor();
    battleShip.hitIncrementor();
    battleShip.hitIncrementor();
    expect(battleShip.getShipStatus()).toBe(true);
})


test ('hit board', () => {
    let board = gameboardFactory('user');
    board.receiveAttack(1,9)
    expect(board.returnSpace(1,9)).toStrictEqual(["X"])
})