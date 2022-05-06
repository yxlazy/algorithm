/**
 * 1. 希尔排序(Shell Sort)是插入排序的一种，它是针对直接插入排序算法的改进。
 * 2. 希尔排序又称缩小增量排序，因 DL.Shell 于 1959 年提出而得名。
 * 3. 它通过比较相距一定间隔的元素来进行，各趟比较所用的距离随着算法的进行而减小，
 *    直到只比较相邻元素的最后一趟排序为止。
 * 
 * "三层for循环if排序"
 * 
 * 对中等大小规模表现良好，但对规模非常大的数据排序不是最优选择
 */

const { createSource } = require("./utils");

function shellSort(source) {
  const {length} = source;
  // gap增量， 表示将数据分成几个子项
  let gap = Math.floor(length / 2), j;

  //每次排序完成，增量除2
  for (; gap > 0; gap = Math.floor(gap / 2)) {
    // i 对子项进行遍历
    for (let i = gap; i < source.length; i++) {
      // 当前位置的值
      const temp = source[i];
      // 每次只与当前位置减增量位置之前的位置进行比较，不会先将某一组子项遍历完才比较另一组子项
      for (j = i; j >= gap && temp < source[j - gap]; j -= gap) {
        source[j] = source[j - gap]
      }
      // 当前位置减增量位置之前的位置
      source[j] = temp
    }
  }
}

// const source = [88, 34, 2, 13, 1, 9, 434232, 123, 3, 1]
const source = createSource()
/**
 * 分析
 * gap = length / 2 = 5
 */

shellSort(source)
console.log('shellSort...', source)

