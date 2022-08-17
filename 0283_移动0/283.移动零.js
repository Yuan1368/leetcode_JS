/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const exch = (i1,i2, arr) => {
  let temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
}

var moveZeroes = function(nums) {
  let slow = 0, fast = 1;
  for(;fast<nums.length;fast++){
    if(nums[slow]!==0){
      slow++;
      continue;
    }
    if(nums[slow]===0&&nums[fast]!==0){
      exch(fast, slow, nums);
      slow++;
    }
  }
  return nums;
};
// @lc code=end

