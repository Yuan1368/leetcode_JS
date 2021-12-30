/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let i = 0;
  let j = height.length-1;
  let area = 0;
  let maxArea = 0;
  while(i<j){
    area = Math.min(height[i], height[j])*(j-i);
    if(height[i]<height[j]){
      i+=1;
    }else{
      j-=1;
    }

    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
};
// @lc code=end

