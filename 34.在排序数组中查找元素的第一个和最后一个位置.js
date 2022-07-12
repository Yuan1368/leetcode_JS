/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
  let l =-1,
    r = -1;
  for(let i=0;i<nums.length;i++){
    if(nums[i]===target&&l===-1){
        l=i;
        r=i;
    }

    else if(nums[i]===target){
      r=i; 
    }
  }

  return [l,r];
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = searchRange;
// @after-stub-for-debug-end