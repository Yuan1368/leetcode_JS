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
    return 0
  }
  const data = nums.sort((a,b)=>a-b);
  let results = [];
  let count = 1;
  for(let i = 0; i<data.length;i++){
    let j = i+1;
    if(j>=data.length){
      results.push(count);
      break;
    }
    if(data[j]===data[i]+1){
      count++;
    }
    else if(data[j]===data[i]){
      continue;
    }
    else{
      results.push(count);
      count = 1;
  }
}
const res = results.sort((a,b)=>a-b);
return res[res.length-1];
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = longestConsecutive;
// @after-stub-for-debug-end