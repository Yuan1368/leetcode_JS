/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let str = x.toString();
  for(let i=0;i<str.length;i++){
    let j=str.length-1-i;
    if(i===j||j<i){
      return true
    }
    if(str[i]!==str[j])
      return false;
  }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isPalindrome;
// @after-stub-for-debug-end