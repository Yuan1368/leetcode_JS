/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

  let obj ={"I":1, "V":5,"X":10, "L":50, "C":100, "D":500, "M":1000};

  let preNum = obj[s[0]]
  let res = 0;

  for(let i=1;i<s.length;i++){
    if(obj[s[i]]> preNum){
      res -= preNum;
    }else{
      res += preNum;
    }
    preNum = obj[s[i]];
  }
  res += preNum;
  return res;
};
// @lc code=end

