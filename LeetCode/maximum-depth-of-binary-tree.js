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
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  function dfs(node, currentDepth) {
    if (currentDepth > maxDepth) {
      maxDepth = currentDepth;
    }

    if (node.left === null && node.right === null) {
      return;
    }

    if (node.left) {
      dfs(node.left, currentDepth + 1);
    }

    if (node.right) {
      dfs(node.right, currentDepth + 1);
    }
  }

  let maxDepth = 0;
  dfs(root, 1);
  return maxDepth;
};
