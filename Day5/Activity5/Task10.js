const applyFunctions = (func1, func2, value) => func2(func1(value));

// Example usage:
const double = x => x * 2;
const square = x => x * x;

const result = applyFunctions(double, square, 5);
console.log(result); // Outputs: 100
