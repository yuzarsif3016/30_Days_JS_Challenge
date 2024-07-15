// Define three numbers
let num1 = 25;
let num2 = 42;
let num3 = 39;

let greatest;

// Nested if-else to find the greatest number
if (num1 > num2) {
    if (num1 > num3) {
        greatest = num1;
    } else {
        greatest = num3;
    }
} else {
    if (num2 > num3) {
        greatest = num2;
    } else {
        greatest = num3;
    }
}

console.log("The greatest number is: " + greatest);
