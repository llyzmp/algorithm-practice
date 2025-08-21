/*
 * @lc app=leetcode.cn id=15 lang=javascript
 * @lcpr version=30202
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let result = []
  nums.sort((a, b) => a - b)
  const n = nums.length
  for(let i = 0; i < n - 2; i++) {
    // 重复的跳出
    if(n > 0 && nums[i] === nums[i - 1]) continue
    // 订一个目标值，左+右 = 目标值 
    let target = -nums[i]
    let left = i + 1
    let right = n - 1
    while(left < right) {
      const sum = nums[left] + nums[right]
      if( sum === target) {
        result.push([nums[i], nums[left], nums[right]])
        while(left < right && nums[left] === nums[left + 1]) {
          left++
        }
        while(left < right && nums[right] === nums[right - 1]) {
          right--
        }
        left++
        right--
      } else if (sum < target) {
        left++
      } else {
        right--
      }
    }
  }
  return result
};
// @lc code=end

console.log(threeSum([-1,0,1,2,-1,-4]))

/*
// @lcpr case=start
// [-1,0,1,2,-1,-4]\n
// @lcpr case=end

// @lcpr case=start
// [0,1,1]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,0]\n
// @lcpr case=end

 */

