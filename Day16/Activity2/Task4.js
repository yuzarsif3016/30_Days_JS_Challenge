function findMax(arr) {
    if (arr.length === 1) {
      return arr[0];
    } else {
      const [first, ...rest] = arr;
      return Math.max(first, findMax(rest));
    }
  }
  
  // Test cases
  const testCases = [
    [5],
    [1, 2, 3, 4, 5],
    [10, 20, 5, 40, 30],
    [-1, -5, -3, -4]
  ];
  
  testCases.forEach((array, index) => {
    const result = findMax(array);
    console.log(`Max value in test case ${index + 1} is ${result}`);
  });
  