// Find Method:
// Challenge: Find the first even number in an array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Starter code - Add your solution here
const firstEvenNumber = numbers.find(number => number % 2 ===0);
console.log(firstEvenNumber)

// Sort Method:
// Challenge: Sort an array of numbers in ascending order.

// Starter code - Add your solution here
var unsortedArray = [5, 3, 8, 1, 9, 2, 7, 4, 6];
let sortedArray = unsortedArray.sort()
console.log(sortedArray)

// Filter Method:
// Challenge: Filter out all the strings from an array of mixed data types.

const mixedArray = [1, 'apple', 2, 'banana', 3, 'cherry', 4, 'date'];

// Starter code - Add your solution here
const filteredArray = mixedArray.filter(element => typeof element !== 'string');
console.log(filteredArray)
// Reduce Method:
// Challenge: Calculate the sum of all numbers in an array.

var numbersArray = [1, 2, 3, 4, 5];

// Starter code - Add your solution here


// Map Method:
// Challenge: Double each number in an array.

var originalArray = [1, 2, 3, 4, 5];

// Starter code - Add your solution here


// forEach Method:
// Challenge: Print all the elements of an array.

var fruits = ['apple', 'banana', 'cherry', 'date'];

// Starter code - Add your solution here
