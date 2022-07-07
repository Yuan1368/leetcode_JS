/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  let left = 0, right = nums.length;
  while(left<right){
    let mid = left + Math.floor((right - left) / 2);
    if(nums[mid]===target){
      return mid;
    }else if(nums[mid]<target){
      left = mid + 1;
    }else if(nums[mid]>target){
      right = mid;
    }
  }
  return right;   
};
// @lc code=end

