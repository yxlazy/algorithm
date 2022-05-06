/*
 * @lc app=leetcode.cn id=912 lang=typescript
 *
 * [912] 排序数组
 */

// @lc code=start
// 插值排序
// function sortArray(nums: number[]): number[] {
//   const {length} = nums

//   for (let i = 1; i < length; i++) {
//     for (let j = i; j > 0; j--) {
//       if (nums[j] < nums[j - 1]) {
//         const temp = nums[j]
//         nums[j] = nums[j - 1]
//         nums[j - 1] = temp
//       }
//     }
    
//   }
//   return nums
// };

// 希尔排序
// function sortArray(nums: number[]): number[] {
//   const {length} = nums

//   let j, gap = Math.floor(length / 2);
//   for (; gap > 0; gap = Math.floor(gap / 2)) {

//     for (let i = gap; i < length; i++) {
//       const temp = nums[i]
//       for (j = i; j >= gap && temp < nums[j - gap]; j -= gap) {
//         nums[j] = nums[j - gap]
//       }
//       nums[j] = temp
//     } 
//   }
//   return nums
// };

// 冒泡排序
// function sortArray(nums: number[]): number[] {
//   const {length} = nums

//   // i 为要执行的次数
//   for (let i = 0; i < length - 1; i++) {
//     // j为实际遍历的元素
//     for (let j = 0; j < length - i - 1; j++) {
//       if (nums[j] > nums[j + 1]) {
//         const temp = nums[j];
//         nums[j] = nums[j + 1]
//         nums[j + 1] = temp
//       }
//     }
    
//   }

//   return nums
// };

// 归并排序
function sortArray(nums: number[]): number[] {
  const {length} = nums

  function merge(arr: number[], l: number, mid: number, r: number) {
    // 截取对应片段
    const aux = arr.slice(l, r + 1);

    let i = l, j = mid + 1
    for (let k = l; k <= r; k++) {
      // 左半部分遍历结束,右边依次放入
      if (i > mid) {
        arr[k] = aux[j - l]
        j++
        // 右半部分遍历结束，左半部分依次放入
      } else if(j > r) {
        arr[k] = aux[i - l]
        i++
      // 正常比较
      }else if (aux[i - l] > aux[j - l]) {
        arr[k] = aux[j - l];
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
    // 分
    const mid = Math.floor((l + r) / 2)    
    sort(arr, l, mid)
    sort(arr, mid + 1, r)
    // 左半部分与右半部分没有正确的顺序
    if (arr[mid] > arr[mid + 1]) {
      // 并
      merge(arr, l, mid, r)
    }    
  }

  sort(nums, 0, length - 1)

  return nums
};
// @lc code=end

