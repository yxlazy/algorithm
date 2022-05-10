/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let dummyHead = new ListNode();
  let left = list1, right = list2, curr = dummyHead;
  // while (left || right) {
  //   if (left === null) {
  //     curr.next = right;
  //     curr = curr.next
  //     right = right.next
  //   } else if (right === null) {
  //     curr.next = left;
  //     curr = curr.next
  //     left = left.next
  //   } else if (left.val < right.val) {
  //     curr.next = left;
  //     curr = curr.next;
  //     left = left.next
  //   } else {
  //     curr.next = right;
  //     curr = curr.next;
  //     right = right.next;
  //   }
  // }
  // 优化，由于已经是有序的，所以当其中一条链为null时，另一条剩下的节点课直接放过来
  while (left && right) {
    if (left.val < right.val) {
      // 添加到新链尾端
      curr.next = left;
      // 原来的链移向下一个节点
      left = left.next
    } else {
      // 添加到新链尾端
      curr.next = right;
      // 原来的链移向下一个节点
      right = right.next;
    }
    curr = curr.next;
  }
  // 左端链剩余节点处理
  if (left) {
    curr.next = left;
  }
  if (right) {
    curr.next = right;
  }

  return dummyHead.next
};
// @lc code=end

