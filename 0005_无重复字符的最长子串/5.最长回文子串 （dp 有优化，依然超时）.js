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

  for(let i = 0; i<len; i++){
      dp[i][i]=true;
  }

  let maxIndex = 0;
  let max = 1;

  for (let l = 2; l <= len; l++) {
    for (let i = 0; i < len - l + 1; i++) {
      let j = i + l - 1;
      if(s[i]!==s[j]){
        dp[i][j]=false
      }else{
        if(j-i<3){
          dp[i][j] = true;
        }else{
          dp[i][j]=dp[i+1][j-1];
        }
      }

      if(dp[i][j]&&j-i+1>max){
        max = j - i + 1;
        maxIndex = i;
      }
    }
  }

  return s.substr(maxIndex, max);
};
// @lc code=end
