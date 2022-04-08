/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


var buildTree = function(inorder, postorder) {
  if(inorder.length===0)
    return null;

  
  let tree = new TreeNode(postorder[postorder.length-1]);

  const mid = inorder.findIndex((node)=>{
    return tree.val===node
  })

  tree.left= buildTree(inorder.slice(0, mid), postorder.slice(0, mid));
  tree.right=buildTree(inorder.slice(mid+1), postorder.slice(mid, postorder.length-1))

  return tree;

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = buildTree;
// @after-stub-for-debug-end