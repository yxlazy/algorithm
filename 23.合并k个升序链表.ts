/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并K个升序链表
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

// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }
// }
// 使用分治法，将其变更为两个链表之间的合并
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  // 边界
  if (lists.length === 0) {
    return null
  }
  return divide(lists, 0, lists.length - 1)
};

// 分
function divide(lists: Array<ListNode>, l: number, r: number) {
  if (l === r) {
    return lists[l]
  }

  const mid = Math.floor((l + r) / 2)
  let left = divide(lists, l, mid)
  let right = divide(lists, mid + 1, r)

  return merge(left, right)
}

// 合
function merge(left:ListNode, right:ListNode) {
  let dummy = new ListNode(), p = dummy

  while (left && right) {
    if (left.val > right.val) {
      p.next = right
      right = right.next
    } else {
      p.next = left
      left = left.next
    }
    p = p.next
  }

  if (left) {
    p.next = left
  } 
  if (right) {
    p.next = right
  }
  return dummy.next  
}
// @lc code=end

// [[],[-1, 2],[], [5, 6,7, 8, 9, 9, 9], [2,6], [], []]
// [[-1, 2],[5, 6,7, 8, 9, 9, 9], [2,6], [], []]
// [[-1, 2],[5, 6,7, 8, 9, 9, 9], [2,6]]
// [[-1, 2],[2,6, 99]]

/**
 * [[],[-1, 2],[], [5, 6,7, 8, 9, 9, 9], [2,6], [], []]
 * [[],[-1, 2],[], [5, 6,7, 8, 9, 9, 9]]  [[2,6], [], []]
 * [[],[-1, 2]]  [[], [5, 6,7, 8, 9, 9, 9]]
 */