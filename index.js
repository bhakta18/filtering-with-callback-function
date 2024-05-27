
const numbers = [23, 45, 12, 67, 34, 56, 89, 78, 90];


function filterArray(arr, callback) {
    // Initialize an empty array to store filtered elements
    const filteredArray = [];

    // Iterate over each element of the arr array
    for (let i = 0; i < arr.length; i++) {
        // Call the callback function on each element
        if (callback(arr[i])) {

            filteredArray.push(arr[i]);
        }
    }

    // Return the filteredArray
    return filteredArray;
}

// Define the callback function to check if a number is even
function isEven(num) {
    return num % 2 === 0;
}

// Define the callback function to check if a number is odd
function isOdd(num) {
    return num % 2 !== 0;
}


console.log("Original Array:", numbers);
console.log("Filtered Even Numbers:", filterArray(numbers, isEven));
console.log("Filtered Odd Numbers:", filterArray(numbers, isOdd));
