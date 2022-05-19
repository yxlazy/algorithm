/*
 * @lc app=leetcode.cn id=16 lang=typescript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
function threeSumClosest(nums: number[], target: number): number {
  nums = nums.sort((a, b) => a - b)
  let ans = Number.MAX_SAFE_INTEGER
  for (let first = 0; first < nums.length; first++) {
    let second = first + 1, third = nums.length - 1

    while (second < third) {
      const sum = nums[first] + nums[second] + nums[third]
      
      if (sum === target) {
        return sum
      }

      if (Math.abs(sum - target) < Math.abs(ans - target)) {
        ans = sum
      }

      if (sum > target) {
        let k = third - 1
        while (third < k &&  nums[k] === nums[third]) {
          k--
        }
        third = k
      }

      if (sum < target) {
        let k = second + 1
        while (second < k &&  nums[k] === nums[second]) {
          k++
        }
        second = k
      }
    }
  }
  return ans
};
// @lc code=end

