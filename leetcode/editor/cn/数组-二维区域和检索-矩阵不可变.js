/*
 * @lc app=leetcode.cn id=304 lang=javascript
 * @lcpr version=30305
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  // 处理边界问题
  if(matrix.length == 0 || matrix[0].length === 0) {
    this.preSum = [[0]]
    return
  }
  // 初始化二维数组
  const rows = matrix.length
  const cols = matrix[0].length 
  // 创建数组,多加1, 避免出现负
  this.preSum = new Array(rows + 1)
  // 填充数组中每一项的值初始为[0,0,0,.....]
  for(let i = 0; i <= rows; i++) {
    this.preSum[i] = new Array(cols + 1).fill(0)
  }

  // 构建前缀和
  for(let i = 1; i <= rows; i++) {
    for(let j = 1; j <= cols; j++) {
      this.preSum[i][j] = this.preSum[i - 1][j] + this.preSum[i][j - 1] - this.preSum[i - 1][j - 1] + matrix[i - 1][j - 1]
    }
  }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  return this.preSum[row2 + 1][col2 + 1] - this.preSum[row2 + 1][col1] - this.preSum[row1][col2 + 1] + this.preSum[row1][col1]
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

const numMatrix = new NumMatrix([[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]);
console.log(numMatrix.sumRegion(2, 1, 4, 3));
console.log(numMatrix.sumRegion(1, 1, 2, 2));
console.log(numMatrix.sumRegion(1, 2, 2, 4));

/*
// @lcpr case=start
// ["NumMatrix","sumRegion","sumRegion","sumRegion"]\n[[[[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]],[2,1,4,3],[1,1,2,2],[1,2,2,4]]\n
// @lcpr case=end

 */

