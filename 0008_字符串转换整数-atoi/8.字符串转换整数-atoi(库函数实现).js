/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  let res =  parseInt(s);

  if(res<-Math.pow(2,31))
    return -Math.pow(2, 31);
  else if(res>Math.pow(2, 31)-1)
    return Math.pow(2,31)-1;
  else 
    return res?res:0;
    
};
// @lc code=end

