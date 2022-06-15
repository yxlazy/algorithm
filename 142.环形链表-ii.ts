/*
 * @lc app=leetcode.cn id=142 lang=typescript
 *
 * [142] 环形链表 II
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
 * 这里我们只考虑链表存在环的情况。假设 slow 慢指针与 falst 快指针在环中某个位置相遇。此时：
 * slow 指针走过的路径长度为 a = x + y
 * fast 指针走过的路径长度为 b = x + y + n * (y + z)
 * 由于两个指针都是从同一个地点出发，fast 指针走得更快，那么走的长度肯定是 slow 指针的两倍。所以可以得到 b = 2a，即 b = x + y + n * (y + z) = 2x + 2y
 * 由此，可以推导出 x = n * (y + z) - y = (n-1)*(y+z) + z，即 x - z = (n-1) * (y + z)
 * 从 x-z 表达式可以看出，如果有两个指针同时从头结点，相遇结点这两个地方出发，它们肯定会在环形入口相遇。因为它**们之间的差值刚好是圆环长度的整数倍（**更加严格一点的证明可以用数学归纳法）。
 * 
 *  感觉应该是困难才对
 */

function detectCycle(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) {
      return null
    }

    let fast = head, slow = head

    while (fast && fast.next) {
      fast = fast.next.next
      slow = slow.next
      

      if (fast === slow) {
        break
      }
    }

    if (slow !== fast) {
      return null
    }

    slow = head

    while (slow !== fast) {
      slow = slow.next
      fast = fast.next
    }

    return slow
};
// @lc code=end

