let randNum = 0;
let attempts = 0;
const maxAttempts = 5; // Maximum number of attempts allowed

function check() {
    // Check if game has ended (after max attempts reached or correct guess)
    if (attempts >= maxAttempts) {
        endGame(); // Call endGame to reset the game state
        return; // Exit function to prevent further execution
    }

    // Generate random number on first function call
    if (attempts === 0) {
        randNum = Math.floor(Math.random() * 100) + 1;
    }

    // Get user's guess from input field
    let guess = parseInt(document.getElementById('randNum').value);
    
    // Increment attempts counter
    attempts++;

    // Update attempts remaining display
    document.getElementById('attempts').textContent = maxAttempts - attempts;

    // Check if guess is valid (between 1 and 100)
    if (guess < 1 || guess > 100 || isNaN(guess)) {
        document.getElementById('message').textContent = 'Please enter a number between 1 and 100.';
        return;
    }

    // Check if user guessed correctly
    if (guess === randNum) {
        document.getElementById('message').innerHTML = '<span style="color: blue;">Congratulations! You guessed it right!</span>';
        endGame(); // Call endGame to reset the game state
    } else if (attempts === maxAttempts) {
        // Display message when max attempts reached
        document.getElementById('message').innerHTML = `<span style="color: red;">Sorry, you have reached the maximum attempts. The correct number was ${randNum}.</span>`;
        endGame(); // Call endGame to reset the game state
    } else if (guess < randNum) {
        // Display message for too low guess
        document.getElementById('message').textContent = 'Too low! Try again.';
    } else {
        // Display message for too high guess
        document.getElementById('message').textContent = 'Too high! Try again.';
    }
    
    // Clear input field after each guess
    document.getElementById('randNum').value = "";
}

function endGame() {
    // Disable input field and submit button after game ends
    document.getElementById('randNum').disabled = true;
    document.getElementById('luckNum').disabled = true;

    // Reset game after a delay (e.g., 3 seconds)
    setTimeout(() => {
        randNum = 0;
        attempts = 0;
        document.getElementById('attempts').textContent = maxAttempts;
        document.getElementById('message').textContent = '';

        // Reset input field
        document.getElementById('randNum').value = "";
        document.getElementById('randNum').disabled = false;
        document.getElementById('luckNum').disabled = false;
    }, 3000); // Adjust delay as needed (3000 milliseconds = 3 seconds)
}
