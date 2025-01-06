/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  // First solution:
  // if(!root) {
  //     return true;
  // }

  // function dfs(node, height) {
  //     if (!node) {
  //         return height;
  //     }

  //     const leftHeight = dfs(node.left, height + 1);
  //     const rightHeight = dfs(node.right, height + 1);

  //     if(Math.abs(leftHeight - rightHeight) > 1) {
  //         heightImbalance = true;
  //     }

  //     return Math.max(leftHeight, rightHeight);
  // }

  // let heightImbalance = false;
  // dfs(root, 0);
  // return !heightImbalance;

  if (!root) {
    return true;
  }

  function dfs(node) {
    if (!node) {
      return 0;
    }

    const leftHeight = dfs(node.left) + 1;
    const rightHeight = dfs(node.right) + 1;

    if (Math.abs(leftHeight - rightHeight) > 1) {
      imbalanceFound = true;
    }

    return Math.max(leftHeight, rightHeight);
  }

  let imbalanceFound = false;
  dfs(root);
  return !imbalanceFound;
};
