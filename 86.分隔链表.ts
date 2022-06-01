/*
 * @lc app=leetcode.cn id=86 lang=typescript
 *
 * [86] 分隔链表
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

function partition(head: ListNode | null, x: number): ListNode | null {
  const dummyHead = new ListNode();
  dummyHead.next = head;
  let fast = head, slow = dummyHead, prev = dummyHead;
  while (fast !== null) {
    if (fast.val < x) {
      // 如果fast的前一个节点与slow节点是同一个，则直接向前移动
      if (prev === slow) {
        prev = prev.next
        fast = fast.next
        slow = slow.next
        continue
      }
      // 删除fast节点
      prev.next = fast.next
      // 添加fast节点
      // 更改fast的next的指向，指向slow指针的next
      fast.next = slow.next
      // slow的next指针指向fast
      slow.next = fast
      // slow指针向前移动
      slow = slow.next
      // fast指针回到交换之前的下一个位置
      fast = prev.next
    } else {
      fast = fast.next
      prev = prev.next
    }
  }
  return dummyHead.next
};
// @lc code=end

