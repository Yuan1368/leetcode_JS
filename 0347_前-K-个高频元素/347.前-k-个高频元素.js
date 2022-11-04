/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
  let map = new Map();
  nums.sort();
  for(let i=0;i<nums.length;i++){
      map.set(nums[i], map.has(nums[i])?(map.get(nums[i])+1):0)
  }

  let sortMap = (map)=>{
      let arr = [];
      for(let i of map.keys()){
          let obj = {};
          obj.value = i;
          obj.frequent = map.get(i);
          arr.push(obj);
      }
      arr.sort((a,b)=>{
          return -(a.frequent-b.frequent);
      })
      return arr;
  }
  const sortedArr = sortMap(map);
  let res = [];
  while(k>0){
      res.push(sortedArr.shift().value);
      k--;
  }
  return res;
};
// @lc code=end

