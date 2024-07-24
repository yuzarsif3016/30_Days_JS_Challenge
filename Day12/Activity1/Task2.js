function divideWithCheck(dividend, divisor) {
    try {
        if (divisor === 0) {
            throw new Error('Division by zero is not allowed.');
        }
        return dividend / divisor;
    } catch (error) {
        console.error('An error occurred:', error.message);
        // You can also log the entire error object if you want more details
        // console.error(error);
    }
}

// Example usage:
console.log(divideWithCheck(10, 2)); // Outputs: 5
console.log(divideWithCheck(10, 0)); // Logs: An error occurred: Division by zero is not allowed.
