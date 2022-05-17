/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
  const {length} = height
  // left 指向容器左边，right指向容器右边
  // 每次移动最小的一边
  // size用于记录最大的面积
  let left = 0, right = length - 1, size = 0

  while (left !== right) {
    const h = Math.min( height[left], height[right]), w = right - left

    size = Math.max(w * h, size)
    // 移动小的一边
    if (height[left] <= height[right]) {
      left++
    } else {
      right--
    }
  }

  return size
};
// @lc code=end

