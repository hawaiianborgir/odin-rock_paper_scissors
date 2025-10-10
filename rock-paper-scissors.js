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

function playRound(humanChoice, compChoice) {
    // human rock
    if (humanChoice == "rock" && compChoice == "rock") {
        console.log("Player:rock vs. NPC:rock");
        console.log("DRAW!");
        console.log("Player Score: " + humanScore +" & " +"NPC Score: " +compScore);
    } else if (humanChoice == "rock" && compChoice == "paper") {
        console.log("Player:rock vs. NPC:paper");
        console.log("You Lose");
        compScore += 1;
        console.log("Player Score: " + humanScore +" & " +"NPC Score: " +compScore);
    } else if (humanChoice == "rock" && compChoice == "scissors") {
        console.log("Player:rock vs. NPC:scissors");
        console.log("You WIN!");
        humanScore += 1;
        console.log("Player Score: " + humanScore +" & " +"NPC Score: " +compScore);
    // human paper
    } else if (humanChoice == "paper" && compChoice == "paper") {
        console.log("Player:paper vs. NPC:paper");
        console.log("DRAW!");
        console.log("Player Score: " + humanScore +" & " +"NPC Score: " +compScore);
    } else if (humanChoice == "paper" && compChoice == "scissors") {
        console.log("Player:paper vs. NPC:scissors");
        console.log("You Lose");
        compScore += 1;
        console.log("Player Score: " + humanScore +" & " +"NPC Score: " +compScore);
    } else if (humanChoice == "paper" && compChoice == "rock") {
        console.log("Player:paper vs. NPC:rock");
        console.log("You WIN!");
        humanScore += 1;
        console.log("Player Score: " + humanScore +" & " +"NPC Score: " +compScore);
    // human scissors
    } else if (humanChoice == "scissors" && compChoice == "scissors") {
        console.log("Player:scissors vs. NPC:scissors");
        console.log("DRAW!");
        console.log("Player Score: " + humanScore +" & " +"NPC Score: " +compScore);
    } else if (humanChoice == "scissors" && compChoice == "rock") {
        console.log("Player:scissors vs. NPC:rock");
        console.log("You Lose");
        compScore += 1;
        console.log("Player Score: " + humanScore +" & " +"NPC Score: " +compScore);
    } else if (humanChoice == "scissors" && compChoice == "paper") {
        console.log("Player:scissors vs. NPC:paper");
        console.log("You WIN!");
        humanScore += 1;
        console.log("Player Score: " + humanScore +" & " +"NPC Score: " +compScore);
    }
    return (humanScore, compScore)
}

const humanSelection = getHumanChoice()
const compSelection = getComputerChoice()

playRound(humanSelection, compSelection)

// is it okay to commit one big change (not micro changes) in one commit?