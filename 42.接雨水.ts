/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

/**
 * 双指针
 * 看题解
 *  : ;
 */

// @lc code=start
function trap(height: number[]): number {
  let result = 0
  if (height.length <= 2) {
    return result
  }

  // left左指针, right 为右指针
  let left = 0, right = height.length - 1
  // leftMax 左边最大值，rightMax 右边最大值
  let leftMax = 0, rightMax = 0
  while (left !== right) {
    leftMax = Math.max(leftMax, height[left])
    rightMax = Math.max(rightMax, height[right])

    if (height[left] < height[right]) {
      // 下标 left 处能接的雨水量等于 leftMax-height[left]，计算完后向右移动
      result += leftMax - height[left]
      left++
    } else {
      // 下标 right 处能接的雨水量等于 rightMax-height[right]，计算完后向左移动
      result += rightMax - height[right]
      right--
    }
  }

  return result
};
// @lc code=end

