class TreeNode {
    constructor(value, left = null, right = null) {
      this.value = value; // The value of the node
      this.left = left;   // Reference to the left child node
      this.right = right; // Reference to the right child node
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null; // Root of the tree
    }
  
    // Method to insert a value into the binary tree
    insert(value) {
      const newNode = new TreeNode(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this._insertRec(this.root, newNode);
      }
    }
  
    // Helper method to recursively insert a node
    _insertRec(node, newNode) {
      if (newNode.value < node.value) {
        // Insert in the left subtree
        if (node.left === null) {
          node.left = newNode;
        } else {
          this._insertRec(node.left, newNode);
        }
      } else {
        // Insert in the right subtree
        if (node.right === null) {
          node.right = newNode;
        } else {
          this._insertRec(node.right, newNode);
        }
      }
    }
  
    // Method to perform in-order traversal and display the nodes
    inOrderTraversal() {
      const result = [];
      this._inOrderRec(this.root, result);
      console.log(result.join(' '));
    }
  
    // Helper method for in-order traversal
    _inOrderRec(node, result) {
      if (node !== null) {
        this._inOrderRec(node.left, result);
        result.push(node.value);
        this._inOrderRec(node.right, result);
      }
    }
  }
  
  // Example usage:
  const tree = new BinaryTree();
  tree.insert(5);
  tree.insert(3);
  tree.insert(7);
  tree.insert(2);
  tree.insert(4);
  tree.insert(6);
  tree.insert(8);
  
  console.log('In-order traversal:');
  tree.inOrderTraversal(); // Output: 2 3 4 5 6 7 8
  