function getComputerChoice () {
    let rng = Math.floor((Math.random()*3)+1);
    let comp

    if (rng == 1) {
        comp = "rock";
    } else if (rng == 2) {
        comp = "paper";
    } else {
        comp = "scissors"
    }

    return comp
}

function getHumanChoice () {
    let human = prompt("Please enter your choice: rock, paper, or scissors?")

    return human.toLowerCase()    
}

let humanScore = 0
let compScore = 0


function isDraw(humanChoice, compChoice) {
    if (humanChoice == compChoice) return true;
}

function isHumanWin(humanChoice,compChoice) {
    if (humanChoice == "rock" && compChoice == "scissors" ||
        humanChoice == "paper" && compChoice == "rock" ||
        humanChoice == "scissors" && compChoice == "paper"
    ) return true;
}

function playRound(humanChoice, compChoice) {
    // human rock
    if (isDraw(humanChoice, compChoice)) {
        console.log(`Player:${humanChoice} vs NPC:${compChoice}`);
        console.log("DRAW!")
        console.log(`Player Score: ${humanScore} vs NPC Score: ${compScore}`)
        console.log("---")
    } else if (isHumanWin(humanChoice, compChoice)) {
        console.log(`Player:${humanChoice} vs NPC:${compChoice}`);
        console.log("You WIN!");
        humanScore += 1;
        console.log(`Player Score: ${humanScore} vs NPC Score: ${compScore}`);
        console.log("---")
    } else {
        console.log(`Player:${humanChoice} vs NPC:${compChoice}`);
        console.log("You Lose!");
        compScore += 1;
        console.log(`Player Score: ${humanScore} vs NPC Score: ${compScore}`);
        console.log("---")
    }
    return (humanScore, compScore);
}

let humanSelection;
let compSelection;

function playGame() {
    for (let i=1; i<=5; i++) {
        humanSelection = getHumanChoice();
        compSelection = getComputerChoice();
        playRound(humanSelection, compSelection);
    }
    if (humanScore > compScore) {
        console.log(`Final Score! Player: ${humanScore} vs NPC: ${compScore}`)
        console.log("You've won the game!")
    } else {
        console.log(`Final Score! Player: ${humanScore} vs NPC: ${compScore}`)
        console.log("You've lost the game.")
    }
}

playGame()



// this game has no countermeasure to address typo by user.
// I can add it, but it is not the focus for this project.