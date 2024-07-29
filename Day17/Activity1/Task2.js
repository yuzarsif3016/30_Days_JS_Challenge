class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Add a node to the end of the linked list
    add(value) {
      const newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    // Remove a node from the end of the linked list
    remove() {
      if (this.head === null) {
        return null; // List is empty
      }
  
      if (this.head.next === null) {
        const removedNode = this.head;
        this.head = null;
        return removedNode;
      }
  
      let current = this.head;
      while (current.next.next !== null) {
        current = current.next;
      }
      const removedNode = current.next;
      current.next = null;
      return removedNode;
    }
  
    // Display all nodes in the linked list
    display() {
      const values = [];
      let current = this.head;
      while (current !== null) {
        values.push(current.value);
        current = current.next;
      }
      console.log(values.join(' -> '));
    }
  }
  
  // Example usage
  const list = new LinkedList();
  list.add(1);
  list.add(2);
  list.add(3);
  
  list.display(); // 1 -> 2 -> 3
  
  list.remove();
  list.display(); // 1 -> 2
  
  list.remove();
  list.display(); // 1
  
  list.remove();
  list.display(); // (empty)
  