/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function(root) {
  let res = 0;
  let queue = [];
  if(root){
    queue.push(root);
  }else{
    return res;
  }

  while(queue.length){
    let n = queue.length;
    for(let i = 0; i<n;i++){
      let node = queue.pop();
      if(node.left)
        queue.unshift(node.left);
      if(node.right)
        queue.unshift(node.right);
    }
    res++;
  }
  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = maxDepth;
// @after-stub-for-debug-end