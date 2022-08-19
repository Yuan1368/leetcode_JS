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
  this.preNums = initPreNums(matrix);
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */

const initPreNums = (arr) => {
  const preNums = [];
  for(let i = 0; i < arr.length; i++) {
    preNums[i] = new Array();
    for(let j = 0; j < arr[0].length + 1; j++) {
      preNums[i][j] = 0;
    }
}
  for(let i = 0; i < arr.length;i++){
    for(let j=1;j<arr[0].length+1;j++){
      preNums[i][j] = preNums[i][j-1] + arr[i][j-1];
    }
  }
  console.log(preNums)
  return preNums;
}

NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  
  let res = 0;
  for(let i = row1;i<=row2;i++){
    res += this.preNums[i][col2+1]-this.preNums[i][col1]
  }

  return res; 
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

