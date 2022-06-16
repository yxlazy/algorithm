/*
 * @lc app=leetcode.cn id=143 lang=typescript
 *
 * [143] 重排链表
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

/**
 Do not return anything, modify head in-place instead.
 */
/**
 * 寻找链表中点 - 快慢指针
 * 反转链表 - 新链表 + 头部插入结点
 * 链表合并 - 也可以采用新链表的方式，但在这里不行
 */
function reorderList(head: ListNode | null): void {
  // 空链表，一个结点，两个结点跳过
  if (head === null || head.next === null || head.next.next === null) {
    return
  }

  // 新链表 + 头部插入
  const dummy = new ListNode(0, null)
  let p = head, length = 0
  
  while (p) {
    const temp1 = dummy.next, 
    // 保证原有连表不变
      temp2 = new ListNode(p.val)
    dummy.next = temp2
    temp2.next = temp1
    p = p.next
    length++
  }
  // 将新链表与旧的链表进行插入
  let p2 = head, p3 = dummy.next

  // 现在只用遍历链表一半长度
  let j = Math.floor(length / 2), 
  // 保存当前插入的新链表结点
      prev = null
  // 链表长度是否是偶数长
  const isEven = length % 2 === 0
  
  while (j > 0) {
    const next2 = p2.next, next3 = p3.next
    p2.next = p3
    p3.next = next2
    prev = p3
    p3 = next3
    p2 = next2
    j--
  }

  if (!isEven) {
    p2.next = null
  } else {
    prev.next = null
  }
};
// @lc code=end

