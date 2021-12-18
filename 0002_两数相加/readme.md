## 2. 两数相加

> https://leetcode-cn.com/problems/add-two-numbers/ 难度中等

给你两个 **非空** 的链表，表示两个非负的整数。它们每位数字都是按照 **逆序** 的方式存储的，并且每个节点只能存储 **一位** 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

![addtwonumber1](https://raw.githubusercontent.com/bearbaba/imgs-repo/main/202112182232546.jpg)

示例 1：

> 输入：l1 = [2,4,3], l2 = [5,6,4]
> 输出：[7,0,8]
> 解释：342 + 465 = 807.

示例 2：

> 输入：l1 = [0], l2 = [0]
> 输出：[0]

示例 3：

> 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
> 输出：[8,9,9,9,0,0,0,1]


提示：

> 每个链表中的节点数在范围 [1, 100] 内
> 0 <= Node.val <= 9
> 题目数据保证列表表示的数字不含前导零

题解：

```js
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

  let carry = 0;
  let l3 = new ListNode();
  let l = l3;

  while( l1 || l2){
    let x1 = !l1 ? 0 : l1.val;
    let x2 = !l2 ? 0 : l2.val;

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
```

这题思路挺简单，就是遍历两个链，让这两个链的各个节点的值相加，如果节点的值大于 10 需要考虑进位的问题，另外由于创建`ListNode`对象时，函数`ListNode`  中存在如下声明：

```js
this.val = (val===undefined ? 0 : val)
```

因此新建节点的`val`初始值为 0 ，如果我们不返回`l.next`，而是在一开始考虑当前节点即`l3`的`val`为两节点`val`相加后的值，那么就会出现`l3`的最后一个节点为`0`的情况：

```js
l3.val = sum;
l3.next = new ListNode();
l3 = l3.next;  //当两个链的节点遍历完成后，l3 始终拥有一个非 null 的 next ，也就是l3 会多出一个空节点，我们并不希望这种情况发生
```

所以使用`l3.next = new ListNode(sum%10)`,并且最终返回`l.next`。

