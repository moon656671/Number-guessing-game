
let randomNumber = Math.floor(Math.random() * 15) + 1; 
let tries = 3;
let guessedNumbers = [];

document.getElementById("guess-btn").addEventListener("click", function() {
    let userGuess = parseInt(document.getElementById("guess-input").value);
    const messageElement = document.getElementById("message");
    const guessStatsElement = document.getElementById("guess-stats");
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 15) {
        messageElement.textContent = "Please enter a number between 1 and 15!";
        return;
    }

    guessedNumbers.push(userGuess);

    if (userGuess === randomNumber) {
        messageElement.textContent = "🎉 Congratulations! You've guessed the right number!";
        disableInput(); 
        return; 
    } else if (userGuess < randomNumber) {
        messageElement.textContent = "😅 Your guess is too low!";
    } else {
        messageElement.textContent = "😲 Your guess is too high!";
    }

    tries--;

    guessStatsElement.textContent = `Guessed numbers are: ${guessedNumbers.join(", ")} \nNo. of guesses: ${3 - tries}`;
    
    if (tries === 0) {
        messageElement.textContent = "😔 You've run out of tries! The correct number was " + randomNumber;
        disableInput();
    }
});

function disableInput() {
    document.getElementById("guess-input").disabled = true;
    document.getElementById("guess-btn").disabled = true;
}
