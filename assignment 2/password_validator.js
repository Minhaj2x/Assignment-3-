// Function to handle form submission and validate passwords
function validatePasswords(event) {
    event.preventDefault(); // Prevent default form submission

    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let message = document.getElementById('message');

    if (password === confirmPassword) {
        message.textContent = 'Password set successfully.';
        message.style.color = 'green';
    } else {
        message.textContent = 'Passwords do not match. Please try again.';
        message.style.color = 'red';
        document.getElementById('password').value = '';
        document.getElementById('confirmPassword').value = '';
    }
}

// Add event listener to form submission
document.getElementById('passwordForm').addEventListener('submit', validatePasswords);
