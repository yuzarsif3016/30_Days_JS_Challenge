function countOccurrences(arr, target, index = 0) {
    // Base case: if the index is beyond the array length
    if (index >= arr.length) {
        return 0;
    }

    // Count occurrences of the target element
    const countInCurrentIndex = arr[index] === target ? 1 : 0;

    // Recursive case: count occurrences in the rest of the array
    return countInCurrentIndex + countOccurrences(arr, target, index + 1);
}

// Example usage
const array = [1, 3, 7, 1, 5, 7, 1, 8];
const target = 1;
const count = countOccurrences(array, target);
console.log(`Element ${target} occurs ${count} times.`);
