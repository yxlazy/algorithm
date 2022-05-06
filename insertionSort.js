/**
 * 1. 插入排序(InsertionSort)，一般也被称为直接插入排序。
 * 2. 对于少量元素的排序，它是一个有效的算法。插入排序是一种最简单的排序方法，
 *    它的基本思想是将一个记录插入到已经排好序的有序表中，从而一个新的、记录数增 1 的有序表
 * 3. 在其实现过程使用双层循环，外层循环对除了第一个元素之外的所有元素，
 *    内层循环对当前元素前面有序表进行待插入位置查找，并进行移动。
 */

const { createSource } = require("./utils");

function insertionSort(source) {
  for (let i = 0; i < source.length; i++) {
    for (let j = i; j > 0; j--) {
      const prev = source[j - 1], curr = source[j];

      if (prev > curr) {
        const temp = curr;
        source[j] = prev;
        source[j - 1] = temp;
      } else {
        break;
      }
    }
  }
}


// const source = [88, 34, 2, 13, 1, 9, 434232, 123, 3, 1]
const source = createSource()
/**
 * 分析
 * 
 * source = [88, 34, 2, 13, 1, 9, 434232, 123, 3, 1]
 * 
 * 从第二个元素开始循环
 * i = 1, j = 1
 * 比较
 * j - 1 = 88, j = 34
 * 交换
 * j - 1 = 34, j = 88
 * 
 * 
 * source = [34, 88， 2, 13, 1, 9, 434232, 123, 3, 1]
 * 
 * j--
 * 
 * 
 * 
 * i = 2, j = 2
 * 比较
 * j - 1 = 88, j = 2
 * 交换
 * j - 1 = 2, j = 88
 * 
 * source = [34, 2, 88, 13, 1, 9, 434232, 123, 3, 1]
 * 
 * 第二次循环
 * j--, j = 1
 * 
 * j - 1 = 34, j = 2,
 * 
 * j - 1 = 2, j = 34
 * 
 * source = [2, 34, 88, 13, 1, 9, 434232, 123, 3, 1]
 */

 insertionSort(source);

 console.log('instertSort...', source)