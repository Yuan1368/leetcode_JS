/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function(root) {

  function isOk(p, q){
    if((p===null&&q!==null)||(p!==null&&q===null)){
      return false;
    }

    if(p===null&&q===null){
      return true;
    }

    if(p.val!==q.val)
      return false;
    
    return isOk(p.left, q.right)&&isOk(p.right, q.left);
  }

  return isOk(root, root);


};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isSymmetric;
// @after-stub-for-debug-end