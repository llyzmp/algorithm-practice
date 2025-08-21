/*
 * @lc app=leetcode.cn id=16 lang=javascript
 * @lcpr version=30202
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  // 先排序 
  nums.sort((a, b) => a - b)
  console.log('nums', nums);
  // 初始化前三个数的和
  let initNum = nums[0] + nums[1] + nums[2]  

  for(let i = 0; i < nums.length - 2; i++) {
    let left = i + 1, right = nums.length - 1
    while(left < right) {
      let current = nums[i] + nums[left] + nums[right]
      if (target === current) {
        return current
      }
      if (Math.abs(current - target) < Math.abs(initNum - target) ) {
        initNum = current
      }
      if (current < target) {
        left++
      } else {
        right--
      }
    }
  }
  return initNum
};
// console.log(threeSumClosest([-1,2,1,-4], 1))
console.log(threeSumClosest([0, 0, 0], 1));

// @lc code=end



/*
// @lcpr case=start
// [-1,2,1,-4]\n1\n
// @lcpr case=end

// @lcpr case=start
// [0,0,0]\n1\n
// @lcpr case=end

 */

