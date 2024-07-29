class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  // Example usage:
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  
  node1.next = node2;
  node2.next = node3;
  
  console.log(node1); // Node { value: 1, next: Node { value: 2, next: Node { value: 3, next: null } } }
  