let number = 5; // You can change this value to calculate the factorial of any other number
let result = 1;
let i = number;

do {
    result *= i;
    i--;
} while (i > 0);

console.log(`Factorial of ${number} is ${result}`);
