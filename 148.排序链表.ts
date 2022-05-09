/*
 * @lc app=leetcode.cn id=148 lang=typescript
 *
 * [148] 排序链表
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

//  class ListNode {
//      val: number
//      next: ListNode | null
//      constructor(val?: number, next?: ListNode | null) {
//          this.val = (val===undefined ? 0 : val)
//          this.next = (next===undefined ? null : next)
//      }
//  }

// 插入排序
function sortList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head
  }
  const p = new ListNode()
  p.next = head

  let latestSort = head, curr = head.next

  while (curr) {
    if (latestSort.val <= curr.val) {
      latestSort = latestSort.next
    } else {
      let prev = p

      while (prev.next.val < curr.val) {
        prev = prev.next
      }

      latestSort.next = curr.next
      curr.next = prev.next
      prev.next = curr
    }
    curr = latestSort.next
  }

  return p.next
};
// @lc code=end

