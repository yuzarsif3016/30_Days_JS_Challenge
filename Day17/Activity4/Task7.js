class TreeNode {
    constructor(value, left = null, right = null) {
      this.value = value; // The value of the node
      this.left = left;   // Reference to the left child node
      this.right = right; // Reference to the right child node
    }
  }
  
  // Example usage:
  const node1 = new TreeNode(1);
  const node2 = new TreeNode(2);
  const node3 = new TreeNode(3);
  const root = new TreeNode(0, node1, node2);
  
  node1.left = node3; // Adding child to node1
  