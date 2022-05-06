/*
 * @lc app=leetcode.cn id=75 lang=typescript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  // 冒泡排序
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = 0; j < nums.length - i - 1; j++) {
  //       if (nums[j] > nums[j + 1]) {
  //         const temp = nums[j]
  //         nums[j] = nums[j + 1]
  //         nums[j + 1] = temp
  //       }
  //   }
  // }

  // 插入排序
  // for (let i = 1; i < nums.length; i++) {
  //   for (let j = i; j > 0; j--) {
  //     if (nums[j] < nums[j - 1]) {
  //       const temp = nums[j]
  //       nums[j] = nums[j - 1]
  //       nums[j - 1] = temp
  //     } 
  //     // else {
  //     //   // 优化，提前退出
  //     //   break
  //     // }
  //   }
  // }

  // 希尔排序
  // let gap = Math.floor(nums.length / 2), j //增量
  // for (; gap > 0; gap = Math.floor(gap / 2)) {
  //   for (let i = gap; i < nums.length; i++) {
  //     const temp  = nums[i]
  //     for (j = i; j >= gap && temp < nums[j - gap]; j -= gap) {
  //       nums[j] = nums[j - gap]
  //     }
  //     nums[j] = temp
  //   }
  // }

  // 归并排序
  function merge(arr:number[], l: number , mid: number, r: number) {
    let i = l, j = mid + 1
    const aux = arr.slice(l, r + 1)
    for (let k = l; k <= r; k++) {
      if (i > mid) {
        arr[k] = aux[j - l]
        j++
      } else if (j > r) {
        arr[k] = aux[i -l]
        i++
      } else if (aux[i - l] > aux[j - l]) {
        arr[k] = aux[j - l]
        j++
      } else {
        arr[k] = aux[i - l]
        i++
      }
    }
  }
  function sort(arr: number[], l: number, r: number) {
    if (l >= r) {
      return
    }

    const mid = Math.floor((l + r) / 2)
    sort(arr, l, mid)
    sort(arr, mid + 1, r)

    if (arr[mid] > arr[mid + 1]) {
      merge(arr, l, mid, r)
    }
  }

  sort(nums, 0, nums.length - 1)
};
// @lc code=end

