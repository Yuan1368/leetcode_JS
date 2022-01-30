/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let result = [];
  inorder(root, result);
  return result;
};

var inorder = function (root, result) {
  if (root) {
    if (root.left) inorder(root.left, result);
    result.push(root.val);
    if (root.right) inorder(root.right, result);
  }
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = inorderTraversal;
// @after-stub-for-debug-end
