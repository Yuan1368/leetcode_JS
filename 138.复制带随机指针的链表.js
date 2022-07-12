/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if(head===null) return null;
  let node = head;
  let map = new Map();
  while(node!==null){
    let clone = new Node(node.val);
    map.set(node, clone);
    node = node.next;
  }
  node = head;
  while(node!==null){
    map.get(node).next = map.get(node.next);
    map.get(node).random = map.get(node.random);
    node = node.next;
  }

  return map.get(head);
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = copyRandomList;
// @after-stub-for-debug-end