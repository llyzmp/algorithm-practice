/*
 * @lc app=leetcode.cn id=1 lang=javascript
 * @lcpr version=30202
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  let map = new Map()
  for(let i = 0; i < nums.length; i++) {
    const num = target - nums[i]
    if (map.has(num) ) {
      return [map.get(num), i]
    }
    map.set(nums[i], i)
  }
  return []
};
// @lc code=end

twoSum([-1,-2,-3,-4,-5], -9)

/*
// @lcpr case=start
// [2,7,11,15]\n9\n
// @lcpr case=end

// @lcpr case=start
// [3,2,4]\n6\n
// @lcpr case=end

// @lcpr case=start
// [3,3]\n6\n
// @lcpr case=end

 */


// 哈希表解法
// var twoSum = function(nums, target) {
//     const map = new Map()
//     for(let i = 0; i < nums.length; i++) {
//       const num = target - nums[i]
//       if(map.has(num)) {
//         return [map.get(num), i]
//       }
//       map.set(nums[i], i)
//     }
//     return []
// };

// 暴力解法
// var twoSum = function(nums, target) {
//     for(let i = 0; i < nums.length; i++) {
//       for(let j = i+1; j < nums.length; j++) {
//         if(nums[i] + nums[j] === target) {
//           return [i, j]
//         }
//       }
//     }
//     return []
// };