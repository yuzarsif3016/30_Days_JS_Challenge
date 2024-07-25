// main.js
const { add, subtract, multiply } = require('./mathModule');

const sum = add(5, 10);
const difference = subtract(10, 5);
const product = multiply(5, 10);

console.log(`Sum: ${sum}`); // Output: Sum: 15
console.log(`Difference: ${difference}`); // Output: Difference: 5
console.log(`Product: ${product}`); // Output: Product: 50
