# Rock–Paper–Scissors (DOM Version)

A browser-based Rock–Paper–Scissors game where the player competes against a computer opponent.  
The first to reach **5 points** wins the match.  
The interface is fully interactive using HTML, CSS, and JavaScript, with all results displayed dynamically on the page.

---

## Features

- Interactive UI with clickable buttons  
- Real-time score updates  
- Results displayed directly on the webpage  
- Randomized computer choices  
- Game ends automatically once either side reaches 5 points  
- Final message displayed after the match concludes  

---

## How to Play

1. Open `index.html` in your browser.  
2. Select **Rock**, **Paper**, or **Scissors** using the buttons.  
3. The game will display:
   - Your choice and the computer's choice  
   - Round result (Win / Lose / Draw)  
   - Updated score  
4. Keep playing until either you or the computer reaches **5 points**.  
5. When the match ends, the screen clears and displays the outcome:
   - **You Win!**  
   - **NPC Win!**

---

## How It Works

### Core Functions
- **`getComputerChoice()`**  
  Randomly selects `"rock"`, `"paper"`, or `"scissors"`.

- **`isDraw()`**  
  Checks if both players chose the same option.

- **`isHumanWin()`**  
  Determines whether the human player wins the round.

- **`playRound(humanChoice, compChoice)`**  
  Updates:
  - Selection display  
  - Round result  
  - Scores  

- **`playGame(choice)`**  
  Runs each round when a button is clicked and ends the match at 5 points.

### DOM Interaction

- Buttons are selected using `.querySelectorAll(".choice")`.
- Text fields such as `.selection`, `.result`, and `.status` update dynamically.
- When the game ends, the main container is cleared and replaced with a final message.

---

## Project Structure

rock-paper-scissors/  
│  
├── index.html  
├── rock-paper-scissors.js  
└── README.md

---

## Example In-Game Display

Player: rock vs NPC: scissors
WIN!
Player Score: 1 vs NPC Score: 0


---

## Technologies Used

- HTML5  
- JavaScript (DOM manipulation)  
- Browser Event Listeners  
- Basic CSS (optional if you add styling later)

---

## Future Improvements

- Add animations or stronger styling  
- Add a "Play Again" button after the match  
- Include sound effects or icons for each choice  
- Improve layout responsiveness for mobile screens  
- Add a history log of previous rounds  

---
