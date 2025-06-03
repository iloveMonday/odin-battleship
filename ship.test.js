import ship from './ship';
import gameboard from './gameboard';


test('hit incrementor', () => {
    let battleShip = ship('Battlehsip', 4);
    battleShip.hitIncrementor();
    battleShip.hitIncrementor();
    expect(battleShip.getHitCounter()).toBe(2);
})


test ('hit board', () => {
    let board = gameboard('user');
    board.receiveAttack(1,9)
    expect(board.returnSpace(1,9)).toStrictEqual(["X"])
})