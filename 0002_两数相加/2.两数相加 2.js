/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 精简版：
var addTwoNumbers = function (l1, l2) {

  let carry = 0;
  let l3 = new ListNode();
  let l = l3;

  while( l1 || l2){
    let x1 = !l1?0:l1.val;
    let x2 = !l2?0:l2.val;

    let sum = x1 + x2 + carry;
    carry = parseInt(sum/10);
    if(l1){
      l1 = l1.next;
    }

    if(l2){
      l2 = l2.next;
    }

    l3.next = new ListNode(sum%10);
    l3 = l3.next;
  }

  if(carry===1){
    l3.next = new ListNode(1);
  }

  return l.next;
};
// @lc code=end
