const functions = [];

for (let i = 0; i < 10; i++) {
  functions[i] = (function(index) {
    return function() {
      console.log(index);
    };
  })(i);
}

// Test the functions
functions[0](); // Output: 0
functions[1](); // Output: 1
functions[2](); // Output: 2
functions[3](); // Output: 3
// ... and so on
