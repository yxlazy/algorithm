/*
 * @lc app=leetcode.cn id=203 lang=typescript
 *
 * [203] 移除链表元素
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

// 利用假结点和新链表的思路，然后在链表尾部添加新的结点
function removeElements(head: ListNode | null, val: number): ListNode | null {
  const dummy = new ListNode()
  let tail = dummy

  while (head) {
    if (head.val !== val) {
      tail.next = head
      tail = tail.next
    }

    head = head.next
  }


  tail.next = null

  return dummy.next
};
// @lc code=end

