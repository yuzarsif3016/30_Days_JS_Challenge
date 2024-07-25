// main.js
const utils = require('./utils');

const sum = utils.add(5, 10);
const difference = utils.subtract(10, 5);
const product = utils.multiply(5, 10);
const piValue = utils.PI;
const eValue = utils.E;

console.log(`Sum: ${sum}`); // Output: Sum: 15
console.log(`Difference: ${difference}`); // Output: Difference: 5
console.log(`Product: ${product}`); // Output: Product: 50
console.log(`PI: ${piValue}`); // Output: PI: 3.14159
console.log(`E: ${eValue}`); // Output: E: 2.71828
