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

humanScore = 0
compScore = 0

function playRound(humanChoice, compChoice) {
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
    }
}

// is it okay to commit one big change (not micro changes) in one commit?