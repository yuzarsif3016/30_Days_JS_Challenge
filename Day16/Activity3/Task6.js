function isPalindrome(str) {
    // Base case: if the string is empty or has one character
    if (str.length <= 1) {
        return true;
    }
    
    // Compare first and last characters
    if (str[0] !== str[str.length - 1]) {
        return false;
    }

    // Recursive case: check the substring without the first and last characters
    return isPalindrome(str.slice(1, -1));
}

// Example usage
const testString = "racecar";
const result = isPalindrome(testString);
console.log(result ? `${testString} is a palindrome` : `${testString} is not a palindrome`);
