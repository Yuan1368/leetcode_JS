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
  const binarySearch = (arr, target, res) => {
    let i = 0, j = arr.length-1;
    while(i<j){
      const result = arr[i] + arr[j];
      if(result ===-target){
        const result = [target, arr[i],arr[j]];
        if(i>0&&arr[i]===arr[i-1]){
            i++;
            j--;
            continue;
        }
            
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
  for(let i = 0;i<sortedArr.length;i++){
    if(i>0&&sortedArr[i]===sortedArr[i-1]){
        continue;
    }
    const partialArr = [...sortedArr.slice(i+1)];
    binarySearch(partialArr, sortedArr[i], res);
  }
  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = threeSum;
// @after-stub-for-debug-end