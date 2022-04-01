/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  let res = [];
  let queue = [];
  let isLeft = true;
  if (!root)
    return res;
  queue.push(root);
  while (queue.length) {
    let level = [];
    let n = queue.length;
    for (let i = 0; i < n; i++) {
      let node = queue.pop();
      if (isLeft) {
        level.push(node.val)
      }
      else {
        level.unshift(node.val)
      }
      if(node.left)
        queue.unshift(node.left);
      if(node.right)
        queue.unshift(node.right);

    }
    isLeft = !isLeft;
    res.push(level);
  }

return res;

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = zigzagLevelOrder;
// @after-stub-for-debug-end