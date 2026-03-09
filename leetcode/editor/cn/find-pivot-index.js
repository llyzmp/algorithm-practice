/*
 * @lc app=leetcode.cn id=724 lang=javascript
 * @lcpr version=30305
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  // 计算总和，然后用总和减去左侧和, 减去当前值，判断是否和右侧和相等
  const totalSum = nums.reduce((a,b)=> a+b, 0)
  let leftSum = 0
  for(let i = 0; i < nums.length; i++) {
    if(leftSum === totalSum - leftSum - nums[i]) {
      return i
    }
    leftSum += nums[i]
  }
  return -1
};
// @lc code=end

console.log(pivotIndex([1,7,3,6,5,6]))
console.log(pivotIndex([1,2,3]))
console.log(pivotIndex([2,1,-1]))

/*
// @lcpr case=start
// [1,7,3,6,5,6]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [2,1,-1]\n
// @lcpr case=end

 */

