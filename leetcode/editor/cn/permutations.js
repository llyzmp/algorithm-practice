/*
 * @lc app=leetcode.cn id=46 lang=javascript
 * @lcpr version=30400
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 * 三要素
 * 1. 路径（track）: 已经做出的选择，当前已形成部分排列， 一个数组用来放数字，每次从剩余数字中选择放入
 * 2. 选择列表: 当前可以选择的数字，尚未被使用的数字
 * 3. 结束条件： 当路径长度等于原数组长度时，说明所有数字都已使用，得到一个完整排列，将其加入结果集
 */
var permute = function(nums) {
    let result = []
    let track = []
    let used = new Array(nums.length).fill(false)
    function backtrack() {
      if (track.length === nums.length) {
        result.push([...track])
        return
      } else {
        for(let i = 0; i < nums.length; i++) {
          if (!used[i]) {
            track.push(nums[i])
            used[i] = true
            backtrack()
            track.pop()
            used[i] = false
          }
        }
      }
    }
    backtrack()
    return result
};
// @lc code=end

console.log(permute([1,2,3]))
console.log(permute([0,1]))
console.log(permute([1]))

/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [0,1]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */

