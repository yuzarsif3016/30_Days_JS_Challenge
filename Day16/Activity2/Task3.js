function sumArray(arr) {
    if (arr.length === 0) {
      return 0;
    } else {
      return arr[0] + sumArray(arr.slice(1));
    }
  }
  
  // Test cases
  const testCases = [
    [],
    [1],
    [1, 2, 3, 4, 5],
    [10, 20, 30, 40, 50]
  ];
  
  testCases.forEach((array, index) => {
    const result = sumArray(array);
    console.log(`Sum of elements in test case ${index + 1} is ${result}`);
  });
  