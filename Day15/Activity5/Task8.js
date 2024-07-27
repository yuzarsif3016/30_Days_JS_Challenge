function memoize(fn) {
    const cache = {}; // private cache object to store results
  
    return function(...args) {
      const key = JSON.stringify(args); // create a unique key for the arguments
  
      if (cache[key]) {
        console.log('Fetching from cache:', key);
        return cache[key]; // return the cached result if it exists
      }
  
      console.log('Computing result for:', key);
      const result = fn(...args); // compute the result
      cache[key] = result; // store the result in the cache
  
      return result;
    };
  }
  
  // Factorial function
  function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }
  
  const memoizedFactorial = memoize(factorial);
  
  console.log(memoizedFactorial(5)); // Computing result for: [5] Output: 120
  console.log(memoizedFactorial(5)); // Fetching from cache: [5] Output: 120
  console.log(memoizedFactorial(6)); // Computing result for: [6] Output: 720
  console.log(memoizedFactorial(6)); // Fetching from cache: [6] Output: 720
  