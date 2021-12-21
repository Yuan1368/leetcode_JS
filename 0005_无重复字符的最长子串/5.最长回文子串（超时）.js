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
  if (s.length === 0) {
    return s;
  }

  let len = s.length;
  let dp = [];
  for (let i = 0; i < len; i++) {
    dp.push([]);
    for (let j = 0; j < len; j++) {
      dp[i].push([]);
    }
  }
  let maxIndex = 0;
  let max = 0;

  for (let l = 1; l <= len; l++) {
    for (let i = 0; i < len - l + 1; i++) {
      let j = i + l - 1;

      if (i === j) {
        dp[i][j] = true;
      } else if (i + 1 === j && s[i] === s[j]) {
        dp[i][j] = true;
      } else if (i + 1 === j && s[i] !== s[j]) {
        dp[i][j] = false;
      } else {
        if (dp[i + 1][j - 1] === true && s[i] === s[j]) {
          dp[i][j] = true;
        } else {
          dp[i][j] = false;
        }
      }
      if (dp[i][j] === true) {
        if (j - i + 1 > max) {
          max = j - i + 1;
          maxIndex = i;
        }
      }
    }
  }

  return s.substr(maxIndex, max);
};
// @lc code=end
