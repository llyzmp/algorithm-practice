/*
 * @lc app=leetcode.cn id=7 lang=javascript
 * @lcpr version=30202
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const MIN = -Math.pow(2, 31)
    const MAX = Math.pow(2, 31) - 1
    if (x === 0) {
      return 0
    }
    const isFlag = x < 0
    const absX = Math.abs(x)
    const num = absX.toString().split('').reverse().join('')
    const result = isFlag ? -Number(num) : Number(num)
    if (result > MAX || result < MIN) {
      return 0
    } else {
      return result
    }
};
// @lc code=end

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(0))
console.log(reverse(120))

/*
// @lcpr case=start
// 123\n
// @lcpr case=end

// @lcpr case=start
// -123\n
// @lcpr case=end

// @lcpr case=start
// 120\n
// @lcpr case=end

// @lcpr case=start
// 0\n
// @lcpr case=end

 */

