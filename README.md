Tic Tac Toe Project

Deployed at https://dbenbass.github.io/tictactoe-client/

Technologies Used: Javascript, CSS, HTML5
  -Bootstrap and Flexbox for game board
  -JQuery
  -AJAX

My goal was to create a functioning Tic Tac Toe game that would help to solidify
my Javascript and CSS skills. The program would has authentication features such
as create account, sign in, sign out, and change password.

I started with creating the game board using a grid from a Bootstrap exercize
that we did in class. I then set out to figure out a way to get text on the grid.
I used jQuery's append() to do this, and click() to alternate between X and O
based on whether or not the number of the turn is even. Then using jQuery .text()
the program checks each square for a match based on what has been appended in each square. Then, a winner is declared based off of what the final value of the match is.

I looked at this site for help with game logic: https://coderbyte.com/tutorial/create-a-tic-tac-toe-game-using-html-css-and-jquery

Unsolved problems:
I'd like to clean up my code - it is pretty clunky right now. I also plan on getting my game API working so that I can track and display a logged in user's game score information. I also need to fix my new game button. When the game is complete, it
goes to new game and then refresh. I believe this will be a quick fix.
