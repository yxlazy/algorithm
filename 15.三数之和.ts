/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */
// 双指针算法适用于单调性的序列
// @lc code=start
function threeSum(nums: number[]): number[][] {
  let result = [];

  // if (nums.length === 0 || (nums.length === 1 && nums[0] === 0)) {
  //   return result;
  // }
  nums = nums.sort((a, b) => a - b);

  for (let first = 0; first < nums.length; first++) {
    // 需要和上一次枚举数据不一样
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue;
    }
    let third = nums.length - 1;
    const target = - nums[first];
    for (let second = first + 1; second < nums.length; second++) {
      // 需要和上一次枚举数据不一样
      if (second > first + 1 && nums[second] === nums[second - 1]) {
        continue;
      }

      while (second < third && nums[second] + nums[third] > target) {
        --third;
      }

      // 重合则退出
      if (second === third) {
        break;
      }

      if (nums[second] + nums[third] === target) {
        result.push([nums[first], nums[second], nums[third]]);
      }
    }
  }
  return result;
}
// @lc code=end
