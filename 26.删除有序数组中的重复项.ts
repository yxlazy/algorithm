/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  let i = 0, j = 0
  let {length} = nums

  while (length > 0) {
    j++
    if (nums[i] !== nums[j]) {
      i++
      if (i !== j) {
        const temp = nums[j]
        nums[j] = nums[i]
        nums[i] = temp
      }
    }
    length--
  }
  
  return i
};
// @lc code=end

