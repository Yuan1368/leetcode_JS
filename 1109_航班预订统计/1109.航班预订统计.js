/*
 * @lc app=leetcode.cn id=1109 lang=javascript
 *
 * [1109] 航班预订统计
 */

// @lc code=start
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */

const changeDiffs = (i,j, value, diffArrs) => {
  diffArrs[i] = diffArrs[i] + value;
  if(j+1<diffArrs.length)
    diffArrs[j+1] = diffArrs[j+1] - value;
}

var corpFlightBookings = function(bookings, n) {
  const arrs = new Array(n).fill(0);
  const diffArrs = arrs.slice();
  bookings.forEach((booking)=>{
    const [i,j,value] = booking
    changeDiffs(i-1, j-1, value, diffArrs);
  })
  let res = new Array(diffArrs.length).fill(0);
  res[0] = diffArrs[0]
  for(let i=1; i<diffArrs.length; i++) {
    res[i] = res[i-1] + diffArrs[i];
  }

  return res;
};
// @lc code=end

