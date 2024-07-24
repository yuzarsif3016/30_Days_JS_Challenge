function throwErrorWithLog(message) {
    try {
        throw new Error(message);
    } catch (error) {
        console.error('An error occurred:', error.message);
        // You can also log the entire error object if you want more details
        // console.error(error);
    }
}

// Example usage:
throwErrorWithLog('This is a custom error message.');
