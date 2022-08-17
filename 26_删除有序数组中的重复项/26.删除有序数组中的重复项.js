/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

const exch = (i1, i2, arr) => {
  let temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp; 
}

var removeDuplicates = function(nums) {
  let slow  = 0, fast = 1;
  for(; fast < nums.length; fast++) {
    if(nums[slow]!==nums[fast]){
      slow++; 
      exch(slow, fast, nums);
    }
  }
  return slow+1;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = removeDuplicates;
// @after-stub-for-debug-end