function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    // Base case: if the search range is invalid
    if (left > right) {
        return -1; // Target not found
    }

    // Calculate the middle index
    const mid = Math.floor((left + right) / 2);

    // Check if the middle element is the target
    if (arr[mid] === target) {
        return mid; // Target found
    }

    // Recursive case: search in the left or right half
    if (arr[mid] > target) {
        return binarySearch(arr, target, left, mid - 1); // Search in the left half
    } else {
        return binarySearch(arr, target, mid + 1, right); // Search in the right half
    }
}

// Example usage
const sortedArray = [1, 3, 5, 7, 9, 11, 13];
const target = 7;
const result = binarySearch(sortedArray, target);
console.log(result !== -1 ? `Target found at index ${result}` : "Target not found");
