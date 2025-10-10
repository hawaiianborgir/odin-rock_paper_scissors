# Rock-Paper-Scissors Game

A simple Rock-Paper-Scissors game implemented in JavaScript. The game allows a human player to play against the computer for 5 rounds. Scores are tracked and displayed in the console after each round.

## Features

- Human vs Computer gameplay
- Score tracking for both player and computer
- 5-round game loop
- Randomized computer choices

## How to Play

1. Open the JavaScript file in a browser environment (e.g., run in DevTools console or include in an HTML file).  
2. The game will prompt you to enter your choice: `rock`, `paper`, or `scissors`.  
3. The computer will randomly select its choice.  
4. The result of each round (WIN, LOSE, or DRAW) and the updated scores will be displayed in the console.  
5. The game repeats for 5 rounds.

**Note:** There is no typo handling for invalid inputs in this version. Make sure to type exactly `rock`, `paper`, or `scissors`.

## How It Works

- `getComputerChoice()`: Randomly selects `rock`, `paper`, or `scissors` for the computer.  
- `getHumanChoice()`: Prompts the player to enter their choice.  
- `playRound(humanChoice, compChoice)`: Compares the human and computer choices, updates scores, and logs the round result.  
- `playGame()`: Runs 5 rounds of the game in a loop.

## Example Console Output

```
Player:rock vs. NPC:scissors
You WIN!
Player Score: 1 & NPC Score: 0

Player:paper vs. NPC:rock
You WIN!
Player Score: 2 & NPC Score: 0

Player:scissors vs. NPC:scissors
DRAW!
Player Score: 2 & NPC Score: 0
...
```

## Technologies Used

- JavaScript (ES6)
- Browser console for input/output

## Future Improvements

- Add input validation and error handling for invalid entries.  
- Allow user to play multiple games without refreshing.
- Display scores and results in a web page instead of the console.  
- Declare a final winner after 5 rounds.
- Add a graphical interface for better UX.