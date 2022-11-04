/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const findSame = (left, right)=>{
    const result = [];
    for(let i of left){
      if(right.has(i))
        result.push(i)
    }
    return result;
  }
  let result;
  if(set1.size>set2.size){
    result=findSame(set2, set1);
  }else{
    result = findSame(set1,set2);
  }
  return result;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = intersection;
// @after-stub-for-debug-end