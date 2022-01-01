/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let throusands = ["", "M", "MM", "MMM"];
  let hundreds = ["", "C", "CC","CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  let tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  let ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  return throusands[parseInt(num / 1000)]+hundreds[parseInt(num % 1000 / 100)] + tens[parseInt(num % 100 / 10)] + ones[parseInt(num % 10 / 1)];
  
};
// @lc code=end

