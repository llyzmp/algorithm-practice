/*
 * @lc app=leetcode.cn id=20 lang=javascript
 * @lcpr version=30202
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let result = []
  const obj = {
    '{': '}',
    '(': ')',
    '[': ']'
  }
  for(let i = 0; i < s.length; i++) {
    if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
      result.push(s[i])
    } else {
      if(!result.length) return false
      if (obj[result.pop()] !== s[i]) {
        return false
      } 
    }
  }
  return result.length === 0
};
// @lc code=end

console.log(isValid("()[]{}"))

/*
// @lcpr case=start
// "()"\n
// @lcpr case=end

// @lcpr case=start
// "()[]{}"\n
// @lcpr case=end

// @lcpr case=start
// "(]"\n
// @lcpr case=end

// @lcpr case=start
// "([])"\n
// @lcpr case=end

// @lcpr case=start
// "([)]"\n
// @lcpr case=end

 */

