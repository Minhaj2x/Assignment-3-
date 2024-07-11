// Function to generate multiplication table
function generateTable() {
    let userNumber = parseInt(document.getElementById('userNumber').value);
    let tableOutput = document.getElementById('tableOutput');
    tableOutput.innerHTML = ''; // Clear previous table if any

    if (isNaN(userNumber) || userNumber < 1) {
        tableOutput.textContent = 'Please enter a valid number greater than 0.';
        return;
    }

    let table = '';
    for (let i = 1; i <= 10; i++) {
        table += `${userNumber} x ${i} = ${userNumber * i}<br>`;
    }
    tableOutput.innerHTML = table;
}

// Add event listener to button to trigger table generation
document.getElementById('submitBtn').addEventListener('click', generateTable);
