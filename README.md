BATTLESHIP

---SHIP---
(x) Begin your app by creating the Ship class/factory (your choice).
(x) Your ‘ships’ will be objects that include their length, the number of times they’ve been hit and whether or not they’ve been sunk.
() REMEMBER you only have to test your object’s public interface. Only methods or properties that are used outside of your ‘ship’ object need unit tests.
[x] Ships should have a hit() function that increases the number of ‘hits’ in your ship.
[x] isSunk() should be a function that calculates whether a ship is considered sunk based on its length and the number of hits it has received.


---GAMEBOARD---
[x] Create a Gameboard class/factory.
[] Note that we have not yet created any User Interface. We should know our code is coming together by running the tests. You shouldn’t be relying on console.log or DOM methods to make sure your code is doing what you expect it to.
[] Gameboards should be able to place ships at specific coordinates by calling the ship factory or class.
[] Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
[] Gameboards should keep track of missed attacks so they can display them properly.
[] Gameboards should be able to report whether or not all of their ships have been sunk.



-4/29/25
figure out placing ships on gameboard