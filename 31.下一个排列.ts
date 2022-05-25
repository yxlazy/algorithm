/*
 * @lc app=leetcode.cn id=31 lang=typescript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */

 /**
  * [1, 2, 3]
  * 
  * [1, 3, 2]
  * [2, 1, 3]
  * [2, 3, 1]
  * [3, 1, 2]
  * [3, 2, 1]
  * [1, 2, 3]
  * 
  * 1. 先从后向前寻找满足a[i] < a[i+1]的第一对组合，则a[i]为较小数， [i + 1, n)则必然为降序排列，如果不存在这样的组合则直接跳到步骤3
  * 2. 然后在[i + 1, n)这个区间内再查找，满足a[i] < a[j]的第一对组合，则a[j]为较大数
  * 3. 将a[i]与a[j]交换，然后将[i + 1, n)的数据按升序排列
  * 
  * 
  * [2, 3, 4, 5, 6, 1]
  */

 function ascendOrder(nums: number[], start: number, end: number) {
   const part =  nums.slice(start, end).sort((a, b) => a - b)

   nums.splice(start, part.length, ...part)
 }
function nextPermutation(nums: number[]): void {
  const {length} = nums
  if (length <= 1) {
    return
  }
  let j = length - 1
  let i = length - 2
  
  while (i >= 0) {
    // 查找到较小数
    if (nums[i] < nums[i + 1]) {
      // 查找较大数
      while (j >= (i + 1)) {
        if (nums[i] < nums[j]) {
          const temp = nums[i]
          nums[i] = nums[j]
          nums[j] = temp
          break
        }

        j--
      }
      break
    }
    i--
  }
  // 说明nums是降序排列
  if (i < 0) {
    ascendOrder(nums, 0, length)
  } else {
    ascendOrder(nums, i + 1, length)
  }
};
// @lc code=end

