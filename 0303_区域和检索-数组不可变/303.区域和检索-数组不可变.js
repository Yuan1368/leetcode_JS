/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = nums;
  this.preNums = sumPreNums(nums);
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */

const sumPreNums = function(nums) {
  const preNums = new Array(nums.length+1).fill(0);
  for(let i=1;i<nums.length+1; i++){
    let res = preNums[i-1] + nums[i-1];
    preNums[i]=res;
  }
  return preNums;
}

NumArray.prototype.sumRange = function(left, right) {
  return this.preNums[right+1]-this.preNums[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end

