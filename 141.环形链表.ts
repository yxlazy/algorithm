/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
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

// 判断有环 --- 双指针中的开=快慢指针
function hasCycle(head: ListNode | null): boolean {
    const dummy = new ListNode(0, head)
    let fast = dummy, slow = dummy

    // 边界：空链表和一个结点
    if (dummy.next === null || dummy.next.next === null) {
      return false
    }
    // 注意判断fast一定有值
    while (fast && fast.next) {
      // 快指针移动两步
      fast = fast.next.next
      // 慢指针移动一步
      slow = slow.next
      if (fast === slow) {
        break
      }
    }
    // 判断是否有环。如果有环，那么两个指针必定相遇
    return fast === slow
};
// @lc code=end

