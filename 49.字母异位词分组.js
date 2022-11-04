/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
  if(strs.length===0){
      return ;
  }
  let map = new Map();
  for(let i =0;i<strs.length;i++){
    const item = strs[i].split("").sort().join("");
    map.set(item, [...map.get(item)??[], strs[i]])
  }
  return Array.from(map.values());
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = groupAnagrams;
// @after-stub-for-debug-end