/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
var levelOrderBottom = function(root) {
  
  if(!root)
    return [];
  
  let queue = [];
  let res = [];
  queue.push(root);
  while(queue.length!==0){
    let level = [];
    let n = queue.length;
    for(let i=0;i<n;i++){
      let root = queue.shift();
      level.push(root.val)
      if(root.left){
        queue.push(root.left)
      }
      if(root.right){
        queue.push(root.right)
      }
    }
    res.push(level);
  }

  return res.reverse();
};
// @lc code=end

