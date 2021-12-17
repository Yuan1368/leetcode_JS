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
var addTwoNumbers = function (l1, l2) {
  
  let count = 0;
  let sum;
  let l3 = new ListNode(0);
  let l = l3;

  while (l1 || l2) {
    if (!l1) {
      sum = l2.val + count;
    } else if (!l2) {
      sum = l1.val + count;
    } else if (l1 && l2) {
      sum = l1.val + l2.val + count;
    }

    count = parseInt(sum / 10);
    remainder = sum % 10;

    l3.next = new ListNode(remainder);
    if (!l1) {
      l1 = null;
    } else if (!l1.next) {
      l1 = null;
    } else {
      l1 = l1.next;
    }
    if (!l2) {
      l2 = null;
    } else if (!l2.next) {
      l2 = null;
    } else {
      l2 = l2.next;
    }
    l3 = l3.next;
  }

  if (count != 0) {
    l3.next = new ListNode(1);
  }

  return l.next;
};
// @lc code=end
