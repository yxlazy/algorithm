/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
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

function reverseList(head: ListNode | null): ListNode | null {
  // let curr =head
  // let prev = null

  // while (curr) {
  //   let next = curr.next
  //   curr.next = prev
  //   prev = curr
  //   curr = next
  // }
  // return prev

  // 利用假头和新链表，采用头部插入结点
  const dummy = new ListNode(-1, null);

  while (head) {
    // 临时结点，保存当前结点的下一个结点，以防后续结点丢失
    const tmp = head.next
    head.next = dummy.next
    dummy.next = head
    // 老链表移动
    head = tmp
  }

  return dummy.next
};
// @lc code=end

