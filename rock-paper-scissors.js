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

function getHumanChoice (choice) {
    return choice;  
}

function isDraw(humanChoice, compChoice) {
    if (humanChoice == compChoice) return true;
}

function isHumanWin(humanChoice,compChoice) {
    if (humanChoice == "rock" && compChoice == "scissors" ||
        humanChoice == "paper" && compChoice == "rock" ||
        humanChoice == "scissors" && compChoice == "paper"
    ) return true;
}

let humanScore = 0;
let compScore = 0;
let round = 1;

const selection = document.querySelector(".selection");
const result = document.querySelector(".result");
const stats = document.querySelector(".status");
const mainContainer = document.querySelector(".container");


function playRound(humanChoice, compChoice) {
    if (isDraw(humanChoice, compChoice)) {
        selection.textContent = `Player:${humanChoice} vs NPC:${compChoice}`;
        result.textContent = "Draw!";
        stats.textContent = `Player Score: ${humanScore} vs NPC Score: ${compScore}`;
    } else if (isHumanWin(humanChoice, compChoice)) {
        selection.textContent = `Player:${humanChoice} vs NPC:${compChoice}`
        result.textContent = "WIN!";
        humanScore += 1;
        stats.textContent = `Player Score: ${humanScore} vs NPC Score: ${compScore}`;
    } else {
        selection.textContent = `Player:${humanChoice} vs NPC:${compChoice}`
        result.textContent = "Lose!";
        compScore += 1;
        stats.textContent = `Player Score: ${humanScore} vs NPC Score: ${compScore}`;
    }
    return (humanScore, compScore);
}

function playGame(choice) {
        playRound(getHumanChoice(choice), getComputerChoice());
        if (humanScore == 5 || compScore == 5) {
            mainContainer.innerHTML = "";
            const win = document.createElement("h1");
            document.body.appendChild(win);
            if (humanScore == 5) {
                win.textContent = "You Win!"
            } else {
                win.textContent = "NPC Win!"
            }
        }
}

const buttons = document.querySelectorAll(".choice")

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault()
        playGame(button.dataset.choice);
    })
})


