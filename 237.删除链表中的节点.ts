/*
 * @lc app=leetcode.cn id=237 lang=typescript
 *
 * [237] 删除链表中的节点
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
 Do not return anything, modify it in-place instead.
 */
function deleteNode(root: ListNode | null): void {
  // 我们再删除链表结点时，需要拿到待删除结点的前一个结点，以便能直接改变前一个结点的next指向
  // 但在这里由于无法访问链表的头节点 head结点，所以我们需要创建一个prev结点
  
  // 将待删除的结点的值更改为next指向的结点的值，这样我们只需要删除next指向的结点就行了
  root.val = root.next.val

  root.next = root.next.next
};
// @lc code=end

