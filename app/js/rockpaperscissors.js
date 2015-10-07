
////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////


'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}



////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////


function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
        winner = 'tie';
    } else if (playerMove === 'rock' && computerMove === 'scissors') {
        winner = 'player';
    } else if (playerMove === 'paper' && computerMove === 'rock') {
        winner = 'player';
    } else if (playerMove === 'scissors' && computerMove === 'paper') {
        winner = 'player';
    } else {
        winner = 'computer';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
        var playerChose = getPlayerMove();
        var computerChose = getComputerMove();
        var roundWinner = getWinner(playerChose, computerChose);
        if (roundWinner === 'player') {
                playerWins += 1;
                console.log("You won this round.");
                console.log("You chose '" + playerChose + "' while the Computer chose '" + computerChose + "'.");
                console.log('The score is currently ' + playerWins + ' to ' + computerWins);
        } else if (roundWinner === 'computer') {
                computerWins += 1;
                console.log("The computer won this round.");
                console.log("You chose '" + playerChose + "' while the Computer chose '" + computerChose + "'.");
                console.log('The score is currently ' + playerWins + ' to ' + computerWins);
        } else {
                console.log("It's a tie!");
                console.log("You chose '" + playerChose + "' while the Computer chose '" + computerChose + "'.");
                console.log('The score is currently ' + playerWins + ' to ' + computerWins);
        }
    }
    if (playerWins === 5) {
        console.log("You win!");
    } else if (computerWins === 5) {
        console.log("You lose, try again.");
    }
    return [playerWins, computerWins];
}

playToFive();