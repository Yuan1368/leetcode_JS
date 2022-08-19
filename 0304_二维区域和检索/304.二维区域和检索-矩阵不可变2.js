/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  this.matrix = matrix;
  this.preMatrix = initPreMatrix(matrix);
};

const initPreMatrix = function(matrix) {
  let preMatrix = new Array(matrix.length+1);
  for(let i = 0;i<matrix.length+1;i++){
    let res = [];
    for(let j = 0; j<matrix[0].length+1;j++){
      res.push(0)
    }
    preMatrix[i]=res;
  }
  for(let i = 1; i < matrix.length+1;i++){
    for(let j = 1; j< matrix.length+1; j++){
      preMatrix[i][j] = -preMatrix[i-1][j-1]+preMatrix[i][j-1]+preMatrix[i-1][j]+matrix[i-1][j-1]
    }
  }
  console.log(preMatrix)
  return preMatrix;
}

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  return this.preMatrix[row2+1][col2+1]-this.preMatrix[row1][col2+1]-this.preMatrix[row2+1][col1]+this.preMatrix[row1][col1];
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

