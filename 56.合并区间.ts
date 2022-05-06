/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
  const {length} = intervals
  // 冒泡排序
  // for (let i = 0; i < length; i++) {
  //   for (let j = 1; j < length - i; j++) {
  //     if (intervals[j - 1][0] > intervals[j][0]) {
  //       const temp = intervals[j - 1]
  //       intervals[j - 1] = intervals[j]
  //       intervals[j] = temp
  //     }
  //   }
    
  // }
  // 数组sort进行排序
  intervals.sort((a, b) => {
    return a[0] - b[0]
  })
  
  // 合并
  for (let i = 0; i < intervals.length - 1; i++) {
    const curr = intervals[i], next = intervals[i + 1]
    
    if (curr[1] >= next[0]) {
      intervals[i] = [curr[0], Math.max(next[1], curr[1])]

      intervals.splice(i + 1, 1)
      i--
    }
  }
  return intervals
};
// @lc code=end

