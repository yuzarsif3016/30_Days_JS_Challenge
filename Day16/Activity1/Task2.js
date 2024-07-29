function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  // Test cases
  const testCases = [0, 1, 5, 7, 10];
  
  testCases.forEach(number => {
    const result = fibonacci(number);
    console.log(`Fibonacci of ${number} is ${result}`);
  });
  