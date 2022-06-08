/*
 * @lc app=leetcode.cn id=83 lang=typescript
 *
 * [83] 删除排序链表中的重复元素
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(Number.MAX_SAFE_INTEGER, null)
  let tail = dummy

  while (head) {
    if (tail.val !== head.val) {
      tail.next = head
      tail = tail.next
    }
    head = head.next
  }
  // 尾巴next设为null
  tail.next = null
  return dummy.next
};
// @lc code=end

