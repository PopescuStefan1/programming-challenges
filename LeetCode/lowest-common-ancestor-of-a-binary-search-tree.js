/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // Iterative:
  // let currentNode = root;
  // while (true) {
  //     // If one of the nodes is reached return that node as the LCA
  //     if (currentNode.val === p.val || currentNode.val === q.val) {
  //         return currentNode;
  //     }

  //     // If one of the nodes is smaller than the current node and the other one is larger then return currentNode as LCA
  //     if ((p.val < currentNode.val && q.val > currentNode.val) || (q.val < currentNode.val && p.val > currentNode.val)) {
  //         return currentNode;
  //     }

  //     if (p.val < currentNode.val && currentNode.left) {
  //         // If both nodes are smaller than currentNode search left subtree
  //         currentNode = currentNode.left;
  //     } else {
  //         // If both nodes are larger than currentNode search right subtree
  //         currentNode = currentNode.right;
  //     }
  // }

  // Recursive:
  function search(node) {
    if (!node) {
      return;
    }

    // If one of the nodes is reached return that node as the LCA
    if (node.val === p.val || node.val === q.val) {
      lca = node;
      return;
    }

    // If one of the nodes is smaller than the current node and the other one is larger then return currentNode as LCA
    if ((p.val < node.val && q.val > node.val) || (q.val < node.val && p.val > node.val)) {
      lca = node;
      return;
    }

    if (p.val < node.val && q.val < node.val) {
      search(node.left);
    } else {
      search(node.right);
    }
  }

  let lca = root;
  search(root);
  return lca;
};
