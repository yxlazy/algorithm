/*
 * @lc app=leetcode.cn id=125 lang=typescript
 *
 * [125] 验证回文串
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  // if (s.length < 2) {
  //   return true
  // }

  // let left = 0, right = s.length - 1

  // while (left < right) {
  //   if (!/[a-zA-Z0-9]/.test(s.charAt(left))) {
  //     left++
  //     continue
  //   }
  //   if (!/[a-zA-Z0-9]/.test(s.charAt(right))) {
  //     right--
  //     continue
  //   }
  //   if (s.charAt(left).toLowerCase() !== s.charAt(right).toLowerCase()) {
  //     return false
  //   }
  //   left++;
  //   right--;
  // }
  // return true
  let str = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
  
  return str.split('').reverse().join('') === str
};
// @lc code=end

