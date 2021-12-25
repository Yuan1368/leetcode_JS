# 最长回文子串

> https://leetcode-cn.com/problems/longest-palindromic-substring/description/

|  Category  |   Difficulty    | Likes | Dislikes |
| :--------: | :-------------: | :---: | :------: |
| algorithms | Medium (35.89%) | 4477  |    -     |

<details style="color: rgb(246, 248, 247); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, system-ui, Ubuntu, &quot;Droid Sans&quot;, sans-serif, &quot;Microsoft Yahei UI&quot;; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary><strong>Tags</strong></summary></details>

<details open="" style="color: rgb(246, 248, 247); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, system-ui, Ubuntu, &quot;Droid Sans&quot;, sans-serif, &quot;Microsoft Yahei UI&quot;; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary><strong>Companies</strong></summary><p style="margin-top: 0px; margin-bottom: 0.7em;"><code style="color: var(--vscode-textPreformat-foreground); font-family: var(--vscode-editor-font-family, &quot;SF Mono&quot;, Monaco, Menlo, Consolas, &quot;Ubuntu Mono&quot;, &quot;Liberation Mono&quot;, &quot;DejaVu Sans Mono&quot;, &quot;Courier New&quot;, monospace); font-size: 1em; line-height: 1.357em; white-space: pre-wrap;">amazon</code><span>&nbsp;</span>|<span>&nbsp;</span><code style="color: var(--vscode-textPreformat-foreground); font-family: var(--vscode-editor-font-family, &quot;SF Mono&quot;, Monaco, Menlo, Consolas, &quot;Ubuntu Mono&quot;, &quot;Liberation Mono&quot;, &quot;DejaVu Sans Mono&quot;, &quot;Courier New&quot;, monospace); font-size: 1em; line-height: 1.357em; white-space: pre-wrap;">bloomberg</code><span>&nbsp;</span>|<span>&nbsp;</span><code style="color: var(--vscode-textPreformat-foreground); font-family: var(--vscode-editor-font-family, &quot;SF Mono&quot;, Monaco, Menlo, Consolas, &quot;Ubuntu Mono&quot;, &quot;Liberation Mono&quot;, &quot;DejaVu Sans Mono&quot;, &quot;Courier New&quot;, monospace); font-size: 1em; line-height: 1.357em; white-space: pre-wrap;">microsoft</code></p></details>

给你一个字符串 `s`，找到 `s` 中最长的回文子串。

 

**示例 1：**

```
输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
```

**示例 2：**

```
输入：s = "cbbd"
输出："bb"
```

**示例 3：**

```
输入：s = "a"
输出："a"
```

**示例 4：**

```
输入：s = "ac"
输出："a"
```

 

**提示：**

- `1 <= s.length <= 1000`
- `s` 仅由数字和英文字母（大写和/或小写）组成

## 题解

### 动态规划（JS 存在超时）

```js
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length === 0) {
    return s;
  }

  let len = s.length;
  let dp = [];
  for (let i = 0; i < len; i++) {
    dp.push([]);
    for (let j = 0; j < len; j++) {
      dp[i].push([]);
    }
  }

  for(let i = 0; i<len; i++){
      dp[i][i]=true;
  }

  let maxIndex = 0;
  let max = 1;

  for (let l = 2; l <= len; l++) {
    for (let i = 0; i < len - l + 1; i++) {
      let j = i + l - 1;
      if(s[i]!==s[j]){
        dp[i][j]=false
      }else{
        if(j-i<3){
          dp[i][j] = true;
        }else{
          dp[i][j]=dp[i+1][j-1];
        }
      }

      if(dp[i][j]&&j-i+1>max){
        max = j - i + 1;
        maxIndex = i;
      }
    }
  }

  return s.substr(maxIndex, max);
};
```

动态规划必须要去考虑区部的情况，从整体的值由局部的值所决定。

`dp[i][j]`，`i`、`j`表示从字符串索引中`i`到`j`的子串，`dp[i][j]`为`true`时表示`i`到`j`的子串是回文，最短子串一定是由一个字符组成字符串的情况，因为最短的子串长度为1。

我们考虑字符串长度为2的情况，这个时候`j - i == 1`，如果`s[i] == s[j]`，那么`dp[i][j]`为`true`，再考虑当`len == 3`时，比较`s[i]`是否等于`s[j]`，如果相等时再去考虑比较`i`到`j`这个范围内（即不包括`i`、`j`的范围，开区间）的子串是否是由回文子串组成的，如果是那么`dp[i+1][j-1]`就为`true`，否则为`false`。`false`时，`i`到`j`大的范围的子串就一定不是回文。

### 中心扩散法

```js
/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function (s) {
  let maxIndex = 0;
  let maxLength = 1;

  if (s.length == 2) {
    if (s[0] === s[1]) {
      return s;
    } else {
      return s[0];
    }
  }

  if (s.length === 1) {
    return s;
  }

  for (let i = 0; i < s.length; i++) {
    let right = i + 1;
    let left = i - 1;
    let count = 1;
    let index = 0;
    while (right < s.length && left >= 0) {
      if (s[right] === s[left]) {
        count += 2;
        index = left;
      }else{
        break;
      }
      right++;
      left--;
    }
    if (count > maxLength) {
      maxIndex = index;
      maxLength = count;
    }
  }

  for (let i = 0; i < s.length; i++) {
    let right = i + 1;
    let left = i;
    let count = 0;
    let index = 0;
    while (right < s.length && left >= 0) {
      if (s[right] === s[left]) {
        count += 2;
        index  = left;
      }else{
        break;
      }
      right++;
      left--;
    }

    if (count > maxLength) {
      maxIndex = index;
      maxLength = count;
    }
  }
  return s.substr(maxIndex, maxLength);
};
// @lc code=end
```

中心扩散法从字符向左右进行比较。