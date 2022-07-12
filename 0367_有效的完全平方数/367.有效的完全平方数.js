/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let left = 0, right = num;
  while(left<=right){
    let mid = left + Math.floor((right - left) /2);
    let res = mid * mid;
    if(res===num){
      return mid;
    }else if(res>num){
      right = mid - 1;
    }else if(res<num){
      left = mid + 1;
    }
  }
  return false;
};
// @lc code=end

