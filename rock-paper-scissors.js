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


// is it okay to commit one big change (not micro changes) in one commit?