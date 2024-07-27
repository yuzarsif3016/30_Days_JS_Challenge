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
  
  // Example usage:
  
  // A simple function to memoize
  function slowFunction(x, y) {
    // Simulate a slow computation
    for (let i = 0; i < 1e6; i++) {}
    return x + y;
  }
  
  const memoizedSlowFunction = memoize(slowFunction);
  
  console.log(memoizedSlowFunction(3, 4)); // Computing result for: [3,4] Output: 7
  console.log(memoizedSlowFunction(3, 4)); // Fetching from cache: [3,4] Output: 7
  console.log(memoizedSlowFunction(5, 6)); // Computing result for: [5,6] Output: 11
  console.log(memoizedSlowFunction(5, 6)); // Fetching from cache: [5,6] Output: 11
  