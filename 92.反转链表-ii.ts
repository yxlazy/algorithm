/*
 * @lc app=leetcode.cn id=92 lang=typescript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {

  const dummy = new ListNode(0, head)
  // 一前一后
  let front = dummy, back = dummy, prevBack = new ListNode(0, dummy)
  let k = right - left;

  // 先找出要交换结点的首尾结点
  while (head) {
    if (right > 0) {
      right--
      front = front.next
    } 
    if (left > 0) {
      left--
      back = back.next
      prevBack = prevBack.next
    }

    if (right === 0 && left === 0) {
      break;
    }

    head = head.next
  }  
  // 从提示4可知，这里k一定不可能大于0的

  // 交换链表 -- 新链表 + 头部插入
  const dummy2 = new ListNode(0, front.next);

  while (k >= 0) {
    // 保存后面的结点
    const next = back.next;    
    // 插入到现有结点的头部
    back.next = dummy2.next;
    dummy2.next = back;
    // 重新指向原来的链表
    back = next;
    k--;
  }

  prevBack.next = dummy2.next

  return dummy.next
};
// @lc code=end

