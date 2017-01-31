link to hosted app: https://philocoder93.github.io/schelling/

When this project loads up (or when you hit the new board button), it fills the game board with a randomly generated assortment of white, red, and blue squares. After that is done every time you hit the "next move button" the game will check each red and blue square, if that square is bordered by squares of the opposite color it will move to an adjacent white square if one is available.

This project, like other, similar projects, uses 2d arrays to represent the various locations on the game board. By using two nested loops one can traverse this 2d structure
left to right top to bottom. One can then create functions and call them inside the double loop and, in so doing, call a function on every single value in the double array.

This project utilizes several functions that are passed into other functions. It also utilizes the Math.random() method.

To 'install' this project just copy the https or ssh link in the repo and run 'git clone <ssh/https here>'

user stories:
1. As a user, I should be able to reset the board when I want to so that I can look for a game with possible moves.
2. As a user, I should be able to find out about the model I'm looking at so that I can understand what I'm looking at.
3. As a user, I should be able to find out about the inventor of the model so that I can understand what I'm looking at.
4. As a user, I should be able to run the simulation for as many iterations as I want so that I can watch situations out to the end.
5. As a user, I should be able to resize the board to as large or as small as I want.

User story 5 requires new functionality that I will add later.

New Step now works every time there is an available move.

Need to radically simplify/ clean up the code.
