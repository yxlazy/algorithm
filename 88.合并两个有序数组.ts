/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // nums1.splice(m, n, ...nums2)
  // 暴躁法，直接sort
  // nums1.sort((a, b) => a - b)
  // 冒泡排序
  // for (let i = 0; i < nums1.length; i++) {
  //   for (let j = 0; j < nums1.length - i; j++) {
  //     if (nums1[j] > nums1[j + 1]) {
  //       const temp = nums1[j]
  //       nums1[j] = nums1[j + 1]
  //       nums1[j + 1] = temp
  //     }      
  //   }
  // }

  // 快速排序
  // function partition(arr, p, r) {
  //   // 取出主元元素, 这里取最右边作为主元元素
  //   const x = arr[r]
  //   // 创建用于区分第一区域和第二区域的指针，该指针始终指向第一区域的最后一个元素，
  //   // 起始时，由于还没有分区，指向p - 1
  //   let i = p - 1

  //   // j 用于遍历元素
  //   for (let j = p; j < r; j++) {
  //     // 如果当前遍历元素小于主元元素，则放到第一区域，否则，大于等于主元元素放到第二区域（这里不需要处理，j++即可）
  //     if (arr[j] < x) {
  //       // 移动到第一区域的下一个位置，这是为了接下来的元素交换，元素交换后，指向的就是第一区域的最后一个元素
  //       i++
  //       const temp = arr[i]
  //       arr[i] = arr[j]
  //       arr[j] = temp
  //     }      
  //   }
  //   // 将主元元素移动到第一区域和第二区域之间
  //   const temp = arr[i + 1]
  //   arr[i + 1] = x
  //   arr[r] = temp
  //   return i + 1
  // }

  // function sort(arr, p, r) {
  //   if (p >= r) {
  //     return
  //   }

  //   const q = partition(arr, p, r)

  //   sort(arr, p, q - 1)
  //   sort(arr, q + 1, r)
  // }

  // sort(nums1, 0, nums1.length - 1)

  // 逆双指针
  let p1 = m - 1, p2 = n - 1
  let i = m + n - 1, curr
  while (p1 >= 0 || p2 >= 0) {
    if (p1 === -1) {
      curr = nums2[p2--]
    } else if (p2 === -1) {
      curr = nums1[p1--]
    } else if (nums1[p1] > nums2[p2]) {
      curr = nums1[p1--]
    } else {
      curr = nums2[p2--]
    }

    nums1[i--] = curr
  }
};
// @lc code=end

