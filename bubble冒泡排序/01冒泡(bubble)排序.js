/**
 * 冒泡排序
 * 它需要重复的走访每一个要排序的元素，一次进行两个元素的比较，如果这两个元素顺序错误就将其进行交换
 * 走访的工作需要重复进行，直到走访到不再需要进行交换
 * 
 * 算法步骤
 * 1. 比较相邻两个元素的大小，如果不符合排序规则就进行交换
 * 2. 对每一对相邻的元素进行相同的工作，从开始第一对到结尾最后一对
 * 3. 针对所有的元素重复以上步骤，除了最后一个
 * 4. 持续对元素进行上面的步骤，直到没有任何一对数字需要比较
 * 
 * 什么时候最快
 * 当输入的数据已经是正序时（已经正序，还需要冒泡？）
 * 
 * 什么时候最慢
 * 当输入的数据是反序时（直接for循环反序输出数据，不需要冒泡）
 * 
 * 参考
 * https://www.runoob.com/w3cnote/bubble-sort.html
 * 
 * 实现
 */

/**
 * 冒泡
 * @param {number[]} input 
 * @param {Function} sort 
 * @returns 
 */
function bubble(input, sort) {
  if (input.length > 1) {
    sort(input)
  }

  return input
}

/**
 * 冒泡降序
 * @param {number[]} input 
 */
function descent(input) {
  // i 冒泡执行了的次数
  for (let i = 0; i < input.length - 1; i++) {
    // j 走访的元素位置
    // 每冒泡一次完成，需要走访的元素就减少一个(因为最后的元素已经是冒泡排序好的，不再需要走访)
    for (let j = 0; j < input.length - 1 - i; j++) {
      const first = input[j], second = input[j + 1]
      let temp
      if (first < second) {
        temp = first
        input[j] = second
        input[j + 1] = temp
      }
    }
  }
}

/**
 * 冒泡升序
 * @param {number[]} input 
 */
function ascent(input) {
  // i 冒泡执行了的次数
  for (let i = 0; i < input.length - 1; i++) {
    // j 走访的元素位置
    // 每冒泡一次完成，需要走访的元素就减少一个(因为最后的元素已经是冒泡排序好的，不再需要走访)
    for (let j = 0; j < input.length - 1 - i; j++) {
      const first = input[j], second = input[j + 1]
      let temp
      if (first > second) {
        temp = first
        input[j] = second
        input[j + 1] = temp
      }
    }
  }
}

bubble([1, 223, 3, -32, 32, -493, 0, 12, 12, 33], descent)

bubble([1, 223, 3, -32, 32, -493, 0, 12, 12, 33], ascent)


/**
 * 递归版冒泡升序
 * @param {number[]} input 
 * @param {number} curr 冒泡执行的次数
 * @returns 
 */
function recursion(input, curr = 0) {
  if (curr == input.length) {
    return input
  }

  for (let i = 0; i < input.length - 1; i++) {
    const first = input[i], second = input[i + 1]
      let temp
      if (first > second) {
        temp = first
        input[i] = second
        input[i + 1] = temp
      }
  }

  return recursion(input, curr + 1)
}

bubble([1, 223, 3, -32, 32, -493, 0, 12, 12, 33], recursion)
