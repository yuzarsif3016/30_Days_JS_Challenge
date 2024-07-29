class TreeNode {
    constructor(value = 0, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function calculateDepth(node) {
    if (node === null) {
        return 0;
    }
    
    // Recursively find the depth of the left and right subtrees
    const leftDepth = calculateDepth(node.left);
    const rightDepth = calculateDepth(node.right);
    
    // The depth of the current node is the greater of the left or right subtree depth plus one
    return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage
const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);

// Calculate and log the depth of the binary tree
console.log("Depth of the binary tree:", calculateDepth(root));
