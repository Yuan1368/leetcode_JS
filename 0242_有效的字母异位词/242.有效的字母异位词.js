/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  let strArr = s.split("");
  let map = new Map();
  
  strArr.forEach(s=>{
      if(map.has(s)){
          let i = map.get(s);
          map.set(s, i+1);
      }else{
          map.set(s, 1);
      }
  })
  let result = true;
  let patten = t.split("");
  patten.forEach(i=>{
      if(!map.has(i))
          result = false;
      else{
          let count = map.get(i);
          if(count>0){
              map.set(i, count-1)
          }else{
              result=false;
          }
      }

  });
  [...map.values()].forEach(i=>{
    if(i!==0){
      result=false;
    }
   })
  return result
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isAnagram;
// @after-stub-for-debug-end