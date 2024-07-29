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
  
  // Example usage:
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  console.log(stack.peek()); // 3
  console.log(stack.pop());  // 3
  console.log(stack.peek()); // 2
  console.log(stack.size()); // 2
  stack.clear();
  console.log(stack.isEmpty()); // true
  