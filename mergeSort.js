/**
 * 
 */

const { createSource } = require("./utils")

function merge(source, l, m, r) {
  const aux = source.slice(l, r + 1)
  let i = l, j = m + 1
  for(let k = i;k <= r; k++) {
    if (i > m) {
      source[k] = aux[j - l]
      j++
    } else if (j > r) {
      source[k] = aux[i - l]
      i++
    } else if(aux[i - l] > aux[j - l]) {
      source[k] = aux[j - l]
      j++
    } else {
      source[k] = aux[i - l]
      i++
    }
  }
}

function mergeSort(source, l, r) {
  if (l >= r) {
    return
  }
  const mid = Math.floor((r + l) / 2)
  // 处理左边

  
  // 分解
  mergeSort(source, l, mid);
  mergeSort(source, mid + 1, r);

  // 处理并归并
  if (source[mid] > source[mid + 1]) {
    merge(source, l, mid, r);
  }
}

// const source = [88, 34, 2, 13, 1, 9, 434232, 123, 3, 1]
const source = createSource()
/**
 * 分析
 * gap = length / 2 = 5
 */

mergeSort(source, 0, source.length - 1);
console.log('mergeSort...', source)

