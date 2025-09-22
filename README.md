# Rock-Paper-Scissors (Console Version)

A simple **Rock-Paper-Scissors** game implemented in **JavaScript**, designed to run in the browser console.  
The game prompts the user for their choice and compares it against a randomly generated computer choice.  

## Features
- Play directly in the browser console (no UI required).
- Random computer choice generation.
- Input validation for user entries.
- Keeps track of scores within a session.

## How It Works
1. The game will prompt you to enter either:
   - `Schere` (Scissors)  
   - `Stein` (Rock)  
   - `Papier` (Paper)  
2. The computer will randomly select one of the three options.  
3. The winner is decided according to standard Rock-Paper-Scissors rules:
   - Scissors beats Paper  
   - Paper beats Rock  
   - Rock beats Scissors  
4. The result is displayed in the browser console.  

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/behluelsamilselcuk/rock-paper-scissors.git
   ```
2. Open the project folder.
3. Launch the game by opening the `index.html` file in your browser.
4. Open the **developer console** (F12 or right-click → Inspect → Console) to play.

## Usage
The game runs 5 rounds by default:
```javascript
playGame();
```
Each call to `playGame()` will prompt you for your choice and display the round result in the console.

## Technologies
- **JavaScript** (core game logic)
- **HTML** (to load the script in the browser)

## Example Output
```
> Schere, Stein oder Papier?
Schere
You win! Schere beats Papier!
```
