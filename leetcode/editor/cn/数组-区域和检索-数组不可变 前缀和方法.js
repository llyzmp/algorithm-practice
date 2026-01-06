/*
 * @lc app=leetcode.cn id=303 lang=javascript
 * @lcpr version=30305
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.preNums = new Array(nums.length + 1).fill(0)
  
  for(let i = 0; i < nums.length; i++) {
    this.preNums[i + 1] = this.preNums[i] + nums[i]
  }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.preNums[right + 1] - this.preNums[left]
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end

const numArray = new NumArray([-2, 0, 3, -5, 2, -1])
console.log('111',numArray.sumRange(2,5))

/*
// @lcpr case=start
// ["NumArray","sumRange","sumRange","sumRange"]\n[[[-2,0,3,-5,2,-1]],[0,2],[2,5],[0,5]]\n
// @lcpr case=end

 */

