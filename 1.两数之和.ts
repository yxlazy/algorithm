/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
// function twoSum(nums: number[], target: number): number[] {
//   const {length} = nums;
//   for (let i = 0; i < length; i++) {
//     let diff = target - nums[i]
//     for (let j = i + 1; j < length; j++) {
//       if (nums[j] === diff) {
//         return [i, j]
//       }
//     }
//   }
// };

/**
 * nums = [1, 4,5,8,9]
 * target = 9
 * 
 * 需要返回这两个数的index
 * 
 * key 为value, value为index
 * map = new Map()
 * 
 * 判断表中是否存在target - nums[i]的值
 * 有，就直接返回对应index
 * 没有就存入表中
 * map.has(target - nums[i])
 * 
 * if (has) {
 * return [map.get(target - nums[i]), i]
 * } else {
 * map.set(nums[i]: 0)
 * }
 * 
 * 
 * 
 * 
 * 
 * 
 */

/**
 * 哈希解法
 * @param nums 
 * @param target 
 * @returns 
 */
function twoSum(nums: number[], target: number): number[] {
  const map = new Map();

  for (let index = 0; index < nums.length; index++) {
    if (map.has(target - nums[index])) {
      return [map.get(target - nums[index]), index];
    }

    map.set(nums[index], index);
  }
}

// @lc code=end
