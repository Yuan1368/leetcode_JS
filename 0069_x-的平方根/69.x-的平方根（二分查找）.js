/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let left = 0, right = x;
  while(left<=right){
    let mid = left + Math.floor((right - left)/2);
    if(mid**2===x){
      return mid;
    }else if((mid**2)<x){
      left = mid + 1;
    }else if((mid**2)>x){
      right = mid - 1;
    }
  }
  return right;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = mySqrt;
// @after-stub-for-debug-end