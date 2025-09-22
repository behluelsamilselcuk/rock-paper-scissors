const btns = document.querySelectorAll('button');
let p = document.querySelector('p');
const winnerDiv = document.querySelector('div');
const restartBtn = document.createElement('button');
const body = document.querySelector('body');

restartBtn.textContent = 'Spiel neustarten!';

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 9);
    
    let choice;
    if (randomNum >= 1 && randomNum <= 3) {
        choice = 'schere';
    } else if (randomNum >= 4 && randomNum <= 6) {
        choice = 'stein';
    } else {
        choice = 'papier';
    }

    return choice;
}

function playRound(e) {
    const humanChoice = e.target.value;
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        p.textContent = 'Unentschieden! Ihr habt beide das gleiche gewählt!';
    } else if (
        humanChoice === 'schere' && computerChoice === 'papier' ||
        humanChoice === 'papier' && computerChoice === 'stein' ||
        humanChoice === 'stein' && computerChoice === 'schere'
    ) {
        humanScore++;
        console.log(humanScore)
        p.textContent = `Du gewinnst! ${humanChoice} schlägt ${computerChoice}!`;
    } else {
        computerScore++;
        console.log(computerScore)
        p.textContent = `Du verlierst! ${computerChoice} schlägt ${humanChoice}!`;
    }

    winnerDiv.textContent = `DU = ${humanScore} : Computer = ${computerScore}`;


    if (humanScore === 5 || computerScore === 5) {
        btns.forEach(btn => {
            btn.disabled = true;            
        });
        body.appendChild(restartBtn);
    }
}

btns.forEach(btn => {
    btn.addEventListener('click', playRound)
})

restartBtn.addEventListener('click', () => {
    window.location.reload()
})