/*
 * @lc app=leetcode.cn id=944 lang=javascript
 *
 * [944] 删列造序
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  let res = 0
  if (strs.length === 0)
    return res;
  let n = strs[0].length;
  if (n === 1)
    return res;
  strs = strs.join("");
  let flag = 0;
  let sliceLen = strs.length / n;
  let slice = n;
  let i = 0;
  let isAdd = true;

  while (i < slice - 1 && flag < sliceLen) {
    j = i + 1;
    isAdd = strs[i].charCodeAt()-strs[j].charCodeAt?false:true;
    if (strs[i].charCodeAt() - strs[j].charCodeAt()) {
      res += 1;
      flag++;
      i = flag * n;
      slice = (flag + 1) * n;
      continue;
    } else {
      if (i === slice - 2) {
        flag++;
        i = flag * n;
        slice = (flag + 1) * n;
        continue;
      }
    }
    i++;
  }
  // for(let i = 0;i<strs.length;i++){
  //     strs[i]
  // }
  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = minDeletionSize;
// @after-stub-for-debug-end