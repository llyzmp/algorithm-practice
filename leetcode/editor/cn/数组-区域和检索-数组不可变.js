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
    // 临界条件
    if(nums.length < 1 && nums.length > 10000) {
      return null;
    }
    this.nums = nums;

};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    // 临界条件
    if(left < 0 || right >= this.nums.length || left > right) {
      return null;
    }
    // 临界条件
    if(this.nums[left] < -1000000 || this.nums[right] > 1000000) {
      return null;
    }
    let sum = 0;
    for(let i=left; i<=right; i++) {
      if(typeof this.nums[i] !== 'number') {
        return null;
      }
      sum += this.nums[i];
    }
    return sum;
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end



/*
// @lcpr case=start
// ["NumArray","sumRange","sumRange","sumRange"]\n[[[-2,0,3,-5,2,-1]],[0,2],[2,5],[0,5]]\n
// @lcpr case=end

 */

