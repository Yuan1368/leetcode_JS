/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let left = 1, right = 1;
  let res = [];
  for(let i = 0; i<nums.length;i++){
    if(i>0){
      left*=nums[i-1]
    }
    res.push(left);
  }
  for(let i = nums.length-1;i>=0;i--){
    if(i+1<nums.length){
      right *= nums[i+1];
    }
    res[i]*=right;
  }
  return res;
};
// @lc code=end

