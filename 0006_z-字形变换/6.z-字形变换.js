/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let arr = new Array(numRows);

  if(numRows===1){
    return s;
  }

  for(let i=0;i<numRows;i++){
    arr[i] = "";
  }
  let flag = false;
  let j = 0;
  for(let i=0;i<s.length;i++){
    if(flag){
      arr[j--] += s[i];
    }else{
      arr[j++] += s[i];
    }

    if(j === 0){
      flag = false;
    }

    if(j === numRows-1){
      flag = true;
    }
    
  }

  let ss = "";
  for(let i=0;i<numRows;i++){
    ss+=arr[i];
  }

  return ss;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = convert;
// @after-stub-for-debug-end