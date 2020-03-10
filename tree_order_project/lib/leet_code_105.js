// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');



// preorder = [3, 9, 20, 15, 7]
// inorder = [9, 3, 15, 20, 7]

//    3
//   / \
// 9    20
//     /  \
//    15   7

function buildTree(preorder, inorder) {
  if (!preorder.length){
    return null;
  }

  const rootVal = preorder[0];
  const root = new TreeNode(val);

  const midIdx = inorder.indexOf(rootVal);

  const leftInorder = inorder.slice(0,midIdx);
  const rightInorder = inorder.slice(midIdx + 1);
  
  const leftPreorder = preorder.filter(val => leftInorder.includes(val))
  const rightPreorder = preorder.filter(val => rightInorder.includes(val))
  const leftTree = buildTree(leftPreorder, leftInorder)
  const rightTree = buildTree(rightPreorder, rightInorder)

  root.left = leftTree;
  root.right = rightTree;

  return root;
}
