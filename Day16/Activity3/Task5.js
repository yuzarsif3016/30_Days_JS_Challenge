function reverseString(str) {
    // Base case: if the string is empty or has only one character
    if (str === "") {
        return str;
    } else {
        // Recursive case: reverse the substring and add the first character to the end
        return reverseString(str.substr(1)) + str[0];
    }
}

// Example usage
const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log(reversedString);
