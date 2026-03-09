/*
 * @lc app=leetcode.cn id=27 lang=javascript
 * @lcpr version=30400
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let slow = 0
    for(let fast = 0; fast < nums.length; fast++) {
      if (nums[fast] !== val) {
        nums[slow] = nums[fast]
        slow++
      }
    }
    return slow
};
// @lc code=end

// 输入一个数组和值， 原地 输出不包含当前值的数组元素个数，数组内顺序可以是乱的，改变原数组
console.log(removeElement([3,2,2,3], 3))
console.log(removeElement([0,1,2,2,3,0,4,2], 2))

/*
// @lcpr case=start
// [3,2,2,3]\n3\n
// @lcpr case=end

// @lcpr case=start
// [0,1,2,2,3,0,4,2]\n2\n
// @lcpr case=end

 */

