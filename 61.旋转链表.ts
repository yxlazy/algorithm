/*
 * @lc app=leetcode.cn id=61 lang=typescript
 *
 * [61] 旋转链表
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


function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (head === null || k === 0) {
    return head
  }
  let length = 0
  // 哑节点，也就是头节点的前一个节点
  const dummyHead = new ListNode(-1, head)
  // curr 当前节点， prev，curr的前一个节点， tail链表的尾节点
  let curr = head, prev = dummyHead, tail = null
  while (head) {
    head = head.next
    if (head !== null) {
      tail = head
    }
    length++ 
  }
  console.log(length, k % length);
  
  // 链表长度为1，无论k是多少，其结果仍然是原来的链表
  // k % length === 0 相当于k就是0
  if (length > 1 && (k % length) > 0) {
    
    let i = length - (k % length)
    while (i > 0) {
      curr = curr.next
      prev = prev.next
      i--
    }

    // 将链表从倒数k % length的位置分成两段
    prev.next = null
    // 将两段链表颠倒重新连接
    tail.next = dummyHead.next
    dummyHead.next = curr
  }
  return dummyHead.next

};
// @lc code=end

