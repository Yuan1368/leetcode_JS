/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function (s) {
  let maxIndex = 0;
  let maxLength = 1;

  if (s.length == 2) {
    if (s[0] === s[1]) {
      return s;
    } else {
      return s[0];
    }
  }

  if (s.length === 1) {
    return s;
  }

  for (let i = 0; i < s.length; i++) {
    let right = i + 1;
    let left = i - 1;
    let count = 1;
    let index = 0;
    while (right < s.length && left >= 0) {
      if (s[right] === s[left]) {
        count += 2;
        index = left;
      }else{
        break;
      }
      right++;
      left--;
    }
    if (count > maxLength) {
      maxIndex = index;
      maxLength = count;
    }
  }

  for (let i = 0; i < s.length; i++) {
    let right = i + 1;
    let left = i;
    let count = 0;
    let index = 0;
    while (right < s.length && left >= 0) {
      if (s[right] === s[left]) {
        count += 2;
        index  = left;
      }else{
        break;
      }
      right++;
      left--;
    }

    if (count > maxLength) {
      maxIndex = index;
      maxLength = count;
    }
  }
  return s.substr(maxIndex, maxLength);
};
// @lc code=end
