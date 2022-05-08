/*
 * @lc app=leetcode.cn id=147 lang=typescript
 *
 * [147] 对链表进行插入排序
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

function insertionSortList(head: ListNode | null): ListNode | null {
  // 边界处理
  if (head === null || head.next === null) {
    return head
  }
  // 用于指向表头
  const p = new ListNode();
  p.next = head
  // 已排序的最后一个节点, 初始状态指向第一个节点
  let latestSort = head
  let curr =  head.next
  // 在链表上进行移动
  while (curr) {
    if (latestSort.val <= curr.val) {
      latestSort = latestSort.next
    } else {
    // 满足if条件应该从表头遍历，寻找插入点
      let prev = p

      while (prev.next.val <= curr.val) {
        prev = prev.next
      }
      // 进行插入操作
      latestSort.next = curr.next
      // curr的next此时应该指向比他小的最接近那个的next
      curr.next = prev.next
      prev.next = curr
    } 
    curr = latestSort.next
  }
  head = p.next
  return head
};
// @lc code=end

