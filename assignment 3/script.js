console.log("Script loaded");

function analyzeArray(arr) {
    console.log("analyzeArray function called with array:", arr);

    // Find the maximum number in the array
    const max = Math.max(...arr);
    console.log("Maximum:", max);

    // Find the minimum number in the array
    const min = Math.min(...arr);
    console.log("Minimum:", min);

    // Calculate the average of the numbers in the array
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const avg = sum / arr.length;
    console.log("Average:", avg);

    // Identify even numbers
    const evenNumbers = arr.filter(num => num % 2 === 0);
    console.log("Even Numbers:", evenNumbers);

    return {
        max: max,
        min: min,
        avg: avg,
        evenNumbers: evenNumbers
    };
}

// Example usage:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = analyzeArray(array);
console.log("Result:", result);
