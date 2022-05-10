/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // 创建一个哑结点（dummyHead），方便对链表进行操作，其next指向链表头
  let dummyHead = new ListNode(),  curr = dummyHead, length = 0;
  dummyHead.next = head;

  // 获得链表长度
  while (head) {
    head = head.next;
    length++
  }
  let i = 1
  // length - n + 1 要删除节点的前驱节点， “+1”即为包含哑结点
  while (i < (length - n + 1)) {
    curr = curr.next;
    i++;
  }
  // 指向删除节点的next，最主要是寻找前驱节点
  curr.next = curr.next.next // 等号后面的curr.next为要删除的节点
  
  return dummyHead.next
};
// @lc code=end

