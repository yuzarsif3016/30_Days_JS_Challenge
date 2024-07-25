// index.js
const _ = require('lodash');

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = _.map(numbers, (num) => num * 2);

console.log(`Original numbers: ${numbers}`);
console.log(`Doubled numbers: ${doubledNumbers}`);
