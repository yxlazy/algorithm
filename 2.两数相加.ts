/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
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
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null, carry = false): ListNode | null {
  if (!l1 && !l2) {
    return carry ? {val: 1, next: null} : null
  }
  const newV: ListNode = {val: null, next: null};
  const val = (l1?.val || 0) + (l2?.val || 0) + (carry ? 1 : 0);
  
  carry = val > 9

  newV.val = val % 10  
  
  newV.next = addTwoNumbers(l1?.next, l2?.next, carry);

  return newV;
};

// @lc code=end

