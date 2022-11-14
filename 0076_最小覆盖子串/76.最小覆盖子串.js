/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let need = new Map(), win = new Map();
  for(let i of t){
    if(need.has(i)){
      need.set(i, need.get(i)+1);
    }else
      need.set(i, 1);
  }

  let left = 0, right = 0, valid = 0;
  let start = 0, len = Infinity;
  while(right<s.length){
    const c = s[right];
    right++;
    if(need.has(c)){
      win.set(c, win.has(c)?win.get(c)+1:1);
      if(win.get(c)===need.get(c))
        valid++;
    }

    while(valid === need.size){
      if(right - left<len){
        start = left;
        len = right-left;
      }
      const d = s[left];
      left++;
      if(need.has(d)){
        if(win.get(d)===need.get(d))
          valid--;
        win.set(d, win.get(d)-1);
      }
    }
  }


  return len === Infinity?"":s.substring(start, len+start);
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = minWindow;
// @after-stub-for-debug-end