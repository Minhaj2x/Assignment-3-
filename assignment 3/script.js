function analyzeArray(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
        return "Array is empty.";
    }

    // Find the maximum number in the array
    const max = Math.max(...arr);

    // Find the minimum number in the array
    const min = Math.min(...arr);

    // Calculate the average of the numbers in the array
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const avg = sum / arr.length;

    // Identify even numbers
    const evenNumbers = arr.filter(num => num % 2 === 0);

    return {
        max: max,
        min: min,
        avg: avg,
        evenNumbers: evenNumbers
    };
}

function processArray() {
    // Get the user input
    const input = document.getElementById('numbers').value;

    // Convert the input string into an array of numbers
    const array = input.split(',').map(num => parseFloat(num.trim()));

    // Check for invalid input
    if (array.some(isNaN)) {
        document.getElementById('results').innerHTML = 'Please enter valid numbers.';
        return;
    }

    // Call the analyzeArray function and get the results
    const result = analyzeArray(array);

    // Display the results
    document.getElementById('results').innerHTML = `
        <strong>Maximum:</strong> ${result.max} <br>
        <strong>Minimum:</strong> ${result.min} <br>
        <strong>Average:</strong> ${result.avg.toFixed(2)} <br>
        <strong>Even Numbers:</strong> ${result.evenNumbers.join(', ')}
    `;
}
