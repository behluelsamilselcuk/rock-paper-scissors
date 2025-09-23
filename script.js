const btns = document.querySelectorAll('button');
let roundResult = document.querySelector('.round-result');
const winnerDiv = document.querySelector('.points');
const restartBtn = document.createElement('button');
const infoDIv = document.querySelector('#information');

restartBtn.textContent = 'Spiel neustarten!';

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 9);
    
    let choice;
    if (randomNum >= 1 && randomNum <= 3) {
        choice = 'Schere';
    } else if (randomNum >= 4 && randomNum <= 6) {
        choice = 'Stein';
    } else {
        choice = 'Papier';
    }

    return choice;
}

function playRound(e) {
    const clickedBtn = e.target;
    const humanChoice = clickedBtn.parentNode.value;
    console.log(humanChoice)
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        roundResult.textContent = 'Unentschieden! Ihr habt beide das gleiche gewählt!';
    } else if (
        humanChoice === 'Schere' && computerChoice === 'Papier' ||
        humanChoice === 'Papier' && computerChoice === 'Stein' ||
        humanChoice === 'Stein' && computerChoice === 'Schere'
    ) {
        humanScore++;
        console.log(humanScore)
        roundResult.textContent = `Du gewinnst! ${humanChoice} schlägt ${computerChoice}!`;
    } else {
        computerScore++;
        console.log(computerScore)
        roundResult.textContent = `Du verlierst! ${computerChoice} schlägt ${humanChoice}!`;
    }

    winnerDiv.textContent = `DU = ${humanScore} : Computer = ${computerScore}`;


    if (humanScore === 5 || computerScore === 5) {
        btns.forEach(btn => {
            btn.disabled = true;            
        });
        infoDIv.appendChild(restartBtn);
    }
}

btns.forEach(btn => {
    btn.addEventListener('click', playRound)
})

restartBtn.addEventListener('click', () => {
    window.location.reload()
})