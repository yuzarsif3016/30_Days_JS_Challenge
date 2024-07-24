// Custom error class
class EmptyStringError extends Error {
    constructor(message) {
      super(message);
      this.name = 'Empty String Error';
    }
  }
  
  // Function that validates the input is not an empty string
  function validateNonEmptyString(input) {
    if (typeof input !== 'string' || input.trim() === '') {
      throw new EmptyStringError('Input cannot be an empty string.');
    }
    return 'Input is valid!';
  }
  
  // Error handling
  try {
    const userInput = ''; // Example input
    const result = validateNonEmptyString(userInput);
    console.log(result); // This line won't be reached if an error is thrown
  } catch (error) {
    if (error instanceof EmptyStringError) {
      console.error(`Validation error: ${error.message}`);
    } else {
      console.error('An unexpected error occurred:', error);
    }
  }
  