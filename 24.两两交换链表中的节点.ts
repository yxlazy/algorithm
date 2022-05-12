/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
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

// 直接一套暴力迭代带走
function swapPairs(head: ListNode | null): ListNode | null {
  if (!head) {
    return null
  }
  const dummyHead = new ListNode(-1, head)
  let prev = dummyHead, curr = dummyHead.next
  // 每两个节点为一组，需考虑长度为偶数或者奇数的情况
  while (curr && curr.next) {
    const temp = curr.next
      curr.next = curr.next.next
      temp.next = curr
      prev.next = temp
      // 移动到下一组节点的第一个节点
      curr = curr.next
      // 移动到下一组节点的第一个节点之前的节点
      prev = prev.next.next

  }

  return dummyHead.next
};
// @lc code=end

