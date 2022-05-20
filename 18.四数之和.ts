/*
 * @lc app=leetcode.cn id=18 lang=typescript
 *
 * [18] 四数之和
 */

// @lc code=start
function fourSum(nums: number[], target: number): number[][] {
  let ans = []
  if (nums.length < 4) {
    return ans
  }
  nums = nums.sort((a, b) => a - b)


  for (let first = 0; first < nums.length - 3; first++) {
    // 排除与上一个元素相等的元素
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue
    }
    for (let second = first + 1; second < nums.length - 2; second++) {
      const diff = target - (nums[first] + nums[second])
      let third = second + 1, fourth = nums.length - 1
      // 排除与上一个元素相等的元素
      if (second > first + 1 && nums[second] === nums[second - 1]) {
        continue
      }

      while (third < fourth) {

        if (nums[third] + nums[fourth] > diff) {
          fourth--
        } else if (nums[third] + nums[fourth] < diff) {
          third++
        }else if (nums[third] + nums[fourth] === diff) {
          ans.push([nums[first], nums[second], nums[third], nums[fourth]])
          while (third < fourth && nums[third] === nums[third + 1]) {
            third++
          }
          while (third < fourth && nums[fourth] === nums[fourth - 1]) {
            fourth--
          }
          fourth--
        }
      }
    }
    
  }
  return ans
};
// @lc code=end

