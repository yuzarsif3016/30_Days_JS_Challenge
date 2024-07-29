class Queue {
    constructor() {
      this.items = [];
    }
  
    // Add an item to the end of the queue
    enqueue(item) {
      this.items.push(item);
    }
  
    // Remove and return the item from the front of the queue
    dequeue() {
      if (this.isEmpty()) {
        throw new Error("Queue is empty");
      }
      return this.items.shift();
    }
  
    // Return the item at the front of the queue without removing it
    front() {
      if (this.isEmpty()) {
        throw new Error("Queue is empty");
      }
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Return the number of items in the queue
    size() {
      return this.items.length;
    }
  
    // Return a string representation of the queue
    toString() {
      return this.items.toString();
    }
  }
  
  // Example usage:
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  console.log(queue.front());  // Output: 1
  console.log(queue.dequeue());  // Output: 1
  console.log(queue.size());  // Output: 1
  console.log(queue.toString());  // Output: 2
  