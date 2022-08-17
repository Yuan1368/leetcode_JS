/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let headNode1 = new ListNode(null);
  let headNode2 = new ListNode(null);
  // headNode1.next = head;
  // headNode2.next = head;
  let p1 = headNode1;
  let p2 = headNode2;
  let p = head;
  while(p!==null){
    if(p.val<x){
      p1.next = new ListNode(p.val);
      p1=p1.next;
    }else{
      p2.next = new ListNode(p.val);
      p2 = p2.next;   
    }
    let temp = p.next;
    p.next = null; 
    p = temp;
  }
  p1.next = headNode2.next;
  return headNode1.next;
  
};
// @lc code=end

