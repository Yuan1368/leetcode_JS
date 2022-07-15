/*
 * @lc app=leetcode.cn id=1385 lang=javascript
 *
 * [1385] 两个数组间的距离值
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {

  arr1.sort();
  arr2.sort();
  let res=0;
  let flag = true;
  arr1.forEach(item=>{
    flag = true;
    for(let i = 0; i< arr2.length;i++){
      if(Math.abs((item-arr2[i]))<=d){
        flag=false;  
        break;
      }
    }
    if(flag) res +=1
  })
  return res;

};
// @lc code=end

