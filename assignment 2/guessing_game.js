// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Function to handle user guesses and validate
function checkGuess() {
    let userGuess = parseInt(document.getElementById('userGuess').value);
    let message = document.getElementById('message');

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! ${randomNumber} is correct.`;
        message.style.color = 'green';
        document.getElementById('submitBtn').disabled = true; // Disable button after correct guess
    } else {
        message.textContent = `Wrong guess. Try again.`;
        message.style.color = 'red';
    }
}

// Add event listener to button to trigger guess validation
document.getElementById('submitBtn').addEventListener('click', checkGuess);