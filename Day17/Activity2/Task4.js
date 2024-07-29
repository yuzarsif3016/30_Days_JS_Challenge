class Stack {
    constructor() {
      this.items = [];
    }
  
    // Adds an item to the top of the stack
    push(element) {
      this.items.push(element);
    }
  
    // Removes the item from the top of the stack and returns it
    pop() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty");
      }
      return this.items.pop();
    }
  
    // Returns the item at the top of the stack without removing it
    peek() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty");
      }
      return this.items[this.items.length - 1];
    }
  
    // Checks if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Returns the size of the stack
    size() {
      return this.items.length;
    }
  
    // Clears the stack
    clear() {
      this.items = [];
    }
  }
  
  function reverseString(str) {
    const stack = new Stack();
  
    // Push all characters of the string onto the stack
    for (let char of str) {
      stack.push(char);
    }
  
    // Pop all characters from the stack and build the reversed string
    let reversed = '';
    while (!stack.isEmpty()) {
      reversed += stack.pop();
    }
  
    return reversed;
  }
  
  // Example usage:
  const originalString = "hello";
  const reversedString = reverseString(originalString);
  console.log(reversedString); // Outputs: "olleh"
  