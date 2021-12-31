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
  let res = "";
  while(num!==0){
    if(num>=1000)
    {
      num-=1000;
      res+="M";
    }else if(1000>num>=900){
      num-=900;
      res+="CM";
    }else if(900>num>=500){
      num-=500;
      res+="D";
    }else if(500>num>=400){
      num-=400;
      res+="CD";
    }else if(400>num>=100){
      num-=100;
      res+="C";
    }else if(100>num>=90){
      num-=90;
      res+="XC"
    }else if(90>num>=50){
      num-=50;
      res+="L"
    }else if(50>num>=40){
      num-=40;
      res+="XL";
    }else if(40>num>=10){
      num-=10;
      res+="X";
    }else if(10>num>=9){
      num-=9;
      res+="IX";
    }else if(9>num>=5){
      num-=5;
      res+="V";
    }else if(5>num>=4){
      num-=4;
      res+="IV";
    }else if(4>num>=1){
      num-=1;
      res+="I";
    }
  }
  return res;
};
// @lc code=end

