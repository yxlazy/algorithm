/*
 * @lc app=leetcode.cn id=965 lang=typescript
 *
 * [965] 单值二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isUnivalTree(root: TreeNode | null): boolean {
  let value = root.val;

  function preorderTraversal(root: TreeNode | null) {
    if (root) {
      // 递归左子树
      if (root.left && root.left.val !== value) {
        return false;
      } 
      if (!preorderTraversal(root.left)) {
        return preorderTraversal(root.left)
      }
      // 右子树
      if (root.right && root.right.val !== value) {
        return false;
      }
      if (!preorderTraversal(root.right)) {
        return preorderTraversal(root.right)
      }
    }
    return true;
  }
  return preorderTraversal(root);
}
// @lc code=end
