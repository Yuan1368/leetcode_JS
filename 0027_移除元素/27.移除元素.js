/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

  const n = nums.length;
  let left = 0;

  for(let i=0;i<n;i++){
    if(val!==nums[i]){
      nums[left++]=nums[i];
    }
  }

  nums.splice(left)
  return nums.length;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = removeElement;
// @after-stub-for-debug-end