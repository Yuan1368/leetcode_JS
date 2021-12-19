/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let right = 0;
  let array = [];
  let maxLength = 0;
  for(;right<s.length;right++){

    
    while(array.includes(s[right])){
      array.shift();
    }

    array.push(s[right]);
    maxLength = Math.max(array.length,maxLength);
  }
  return maxLength;
};
// @lc code=end

