class TreeNode {
    constructor(value = 0, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
function inOrderTraversal(node) {
    if (node === null) {
        return;
    }

    // Traverse the left subtree
    inOrderTraversal(node.left);

    // Log the value of the current node
    console.log(node.value);

    // Traverse the right subtree
    inOrderTraversal(node.right);
}

// Example usage
const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);

// Perform in-order traversal
inOrderTraversal(root);
