function playGame() {
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

    function getHumanChoice() {
        let choice = prompt('Schere, Stein oder Papier?', '');
        let lowChoice = choice.toLowerCase();

        if (lowChoice === 'schere') {
            return 'Schere';
        } else if (lowChoice === 'stein') {
            return 'Stein';
        } else if (lowChoice === 'papier') {
            return 'Papier';
        } else {
            return 'Keine gültige Eingabe';
        }
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return 'Unentschieden! Ihr habt beide das gleiche gewählt!';
        } else if (
            humanChoice === 'Schere' && computerChoice === 'Papier' ||
            humanChoice === 'Papier' && computerChoice === 'Stein' ||
            humanChoice === 'Stein' && computerChoice === 'Schere'
        ) {
            humanScore++;
            return `Du gewinnst! ${humanChoice} schlägt ${computerChoice}!`;
        } else {
            computerScore++;
            return `Du verlierst! ${computerChoice} schlägt ${humanChoice}!`;
        }
    }

    console.log(playRound(getHumanChoice(), getComputerChoice()));
}

playGame();
playGame();
playGame();
playGame();
playGame();