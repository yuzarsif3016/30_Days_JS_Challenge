function factorial(n){
    if(n==0){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
  }
  
  // Test cases
  const testCases = [0, 1, 5, 7];
  
  testCases.forEach(number => {
    const result = factorial(number);
    console.log(`Factorial of ${number} is ${result}`);
  });
  

