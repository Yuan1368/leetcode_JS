/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {



  function postTravel(root){
    if(!root){
      return;
    }
    postTravel(root.left);
    postTravel(root.right);

    let left = root.left;
    let right = root.right;

    root.left = null;
    root.right = left;

    let tree = root;

    while(tree.right){
      tree = tree.right;
    }
    tree.right = right;
  }

  postTravel(root);


};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = flatten;
// @after-stub-for-debug-end