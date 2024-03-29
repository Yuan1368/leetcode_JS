/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const binarySearch = (arr, target, res, map) => {
    let i = 0, j = arr.length-1;
    while(i<j){
      const result = arr[i] + arr[j];
      if(result ===-target){
        const result = [target, arr[i],arr[j]];
        if(i>0&&arr[i]!==arr[i-1])
        // const result = result_.sort((a,b)=>a-b);
          res.push(result);
        i++;
        j--;
      }else if(result > -target){
        j--;
      }else if(result< -target){
        i++;
      }
    }   
  }
  const sortedArr = nums.sort((a,b)=>a-b);
  let res = [];
  let idMap = new Map();
  for(let i = 0;i<sortedArr.length;i++){
    const partialArr = [...sortedArr.slice(i+1)];
    binarySearch(partialArr, sortedArr[i], res, idMap);
  }
  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = threeSum;
// @after-stub-for-debug-end