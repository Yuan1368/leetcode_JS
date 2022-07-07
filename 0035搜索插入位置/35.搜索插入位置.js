/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

    let left = 0, right = nums.length-1;

    if(target<nums[left]){
      return 0;
    }
    if(target>nums[right]){
      return nums.length;
    }

    while(left < right){
        let mid = Math.floor(left + (right - left) / 2);
        if(target<=nums[mid]){
            right = mid;
        }else{
            left = mid + 1;
        }
    }
    return right;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = searchInsert;
// @after-stub-for-debug-end