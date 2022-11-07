/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if(nums.length===0){
    return 0;
  }
  let set = new Set();
  for(let j of nums){
    set.add(j);
  }
  let result = 0;
  for(let i of nums){
    if(set.has(i-1)){
      continue;
    }
    let count = 0;
    let temp = i;
    while(set.has(temp)){
      count++;
      temp++;
    }
    result = Math.max(count, result);
  }
  return result;
};
// @lc code=end

