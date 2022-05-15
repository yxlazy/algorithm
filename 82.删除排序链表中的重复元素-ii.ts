/*
 * @lc app=leetcode.cn id=82 lang=typescript
 *
 * [82] 删除排序链表中的重复元素 II
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
  // 链表长度为0或1时不需要处理
  if (head === null || head.next === null) {
    return head
  }

  // 双指针
  // let dummyHead = new ListNode(-1, head)
  // // prev 已删除重复元素的最后一个节点
  // let prev = dummyHead
  // let p1 = head, p2 = head.next

  // while (p2) {
  //   if (p1.val !== p2.val) {
  //     p1 = p1.next
  //     p2 = p2.next
  //     prev = prev.next
  //   } else if (p2.next && p1.val !== p2.next.val) {
  //     p2 = p2.next.next
  //     p1 = p2.next
  //     prev.next = p1
  //   } else {
  //     p2 = p2.next
  //   }
  // }

  // 栈
  let stack = []
  let dummyHead = new ListNode(-1000, head)
  let curr = head
  let hasEqualEle = false
  stack.push(dummyHead)
  while (curr) {
    const stackTop = stack[stack.length - 1]
    // 栈顶元素与待放入元素相等则记录一下
    if (curr.val === stackTop.val) {
      hasEqualEle = true
    } else {
      // 弹出栈顶相等元素
        if (hasEqualEle) {
        stack.pop()
        hasEqualEle = false
        const stackTop = stack[stack.length - 1]
        // 链表丢弃删除重复元素
        stackTop.next = curr
        }
      stack.push(curr)
    }
    curr = curr.next
  }
  // 处理链表最后都是相等的元素
  if (hasEqualEle) {
    stack.pop()
    const stackTop = stack[stack.length - 1]
    stackTop.next = null
  }
  return  dummyHead.next
};
// @lc code=end

