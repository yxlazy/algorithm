/*
 * @lc app=leetcode.cn id=25 lang=typescript
 *
 * [25] K 个一组翻转链表
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

function myReverse(head: ListNode, tail: ListNode) {
  let prev = tail.next;
  let p = head;
  while (prev !== tail) {
      const nex = p.next;
      p.next = prev;
      prev = p;
      p = nex;
  }
  return [tail, head];
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  const hair = new ListNode(0);
  hair.next = head;
  let pre = hair;

  while (head) {
      let tail = pre;
      // 查看剩余部分长度是否大于等于 k
      for (let i = 0; i < k; ++i) {
          tail = tail.next;
          if (!tail) {
              return hair.next;
          }
      }
      const nex = tail.next;
      [head, tail] = myReverse(head, tail);
      // 把子链表重新接回原链表
      pre.next = head;
      tail.next = nex;
      pre = tail;
      head = tail.next;
  }
  return hair.next;
};
// @lc code=end

