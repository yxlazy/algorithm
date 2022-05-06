/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  const n = s.length;
  // rk 为动指针， i为静指针
  let rk = -1, ans = 0
  let occ = new Set();
  for (let i = 0; i < n; i++) {
    if (i !== 0) {
      // 移除前一个数据
      occ.delete(s[i - 1]);
    }
    
    while (rk + 1 < n && !occ.has(s[rk + 1])) {
      occ.add(s[rk + 1]);

      rk++
    }

    ans = Math.max(ans, rk - i + 1)
  }

  return ans
};
// @lc code=end

// 
/**
 * abcabcbb
 * 
 * stack = a, b, c
 */

