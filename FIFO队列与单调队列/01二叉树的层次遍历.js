/**
 * 从上到下按层打印二叉树，同一层结点按从左到右的顺序打印，每一层打印到一行。
 * 输入为：{
 *  val: 3, 
 *  left: {
 *    val: 9, 
 *    left: null, 
 *    right: null
 *  }, 
 *  right: {
 *    val: 8, 
 *    left: {
 *      val: 6,
 *      left: null,
 *      right: null
 *    },
 *    right: {
 *      val: 7,
 *      left: null,
 *      right: null
 *    }
 *  }
 * }
 * 
 * 输出：[[3], [9, 8], [6, 7]]
 */

//二叉树结点的定义
class TreeNode {
	constructor(val = 0, left = null, right = null) {
    // 树结点中的元素值
		this.val = val
    // 二叉树结点的左子结点
		this.left = left
    // 二叉树结点的右子结点
		this.right = right
	}
}

/**
 * 1. 模拟
 * 从上到下，从左到右依次为 [3] => [9, 8] => [6, 7]
 * 
 * 2. 规律
 * 通过模拟可以发现两个特点：
 * - 广度遍历（层次遍历）：由于二叉树的特点，当我们拿到第N层的第A个结点后，可以通过A的left和right指针拿到下一层的结点
 * - 顺序遍历：每层输出时， 排在左边的结点，它的子结点同样排在下一层最左边
 * 
 * 3.匹配
 * 当你发现题目具备广度遍历（分层遍历/层次遍历）和顺序输出的特点，就应该想到用FIFO队列来试一试
 * 
 * 4.边界
 * 关于二叉树的边界，需要考虑一种空二叉树的情况，当遇到一颗空的二叉树，有两种解决办法
 * - 特殊判断：如果发现是一颗空二叉树，就直接返回空结果
 * - 制定一个规则：不要让空指针进入到FIFO队列
 */

/**
 * 
 * @param {TreeNode} root 
 * @returns 层次遍历后的结果
 */
function levelOrder(root = null) {
  //生成FIFO队列
  const queue = new Array(0);
  //如果结点不为空，那么加入FIFO队列
  if (root != null) {
    queue.push(root);
  }

  //ans用于保存层次遍历的结果
  const ans = new Array(0);
  //开始利用FIFO队列进行层次遍历
  while (queue.length > 0) {
    // 取出当前层里面元素的个数
    const qLength = queue.length;
    //当前层的结果存放于tmp表中
    const tmp = new Array(0);
    // 遍历当前层的每个结点
    for (let i = 0; i < qLength; i++) {
      //当前层前面结点先出队
      const cur = queue.shift();
      //把当前层结果存放到tmp表
      tmp.push(cur.val);
      // 把下一层非空结点入队
      if (cur.left != null) {
        queue.push(cur.left);
      }
      if (cur.right != null) {
        queue.push(cur.right);
      }
    }
    ans.push(tmp);
  }

  return ans;
}

//测试
const treeNode = {
  val: 3, 
  left: {
    val: 9, 
    left: null, 
    right: null
  }, 
  right: {
    val: 8, 
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}

const result = levelOrder(treeNode)
console.log(result)