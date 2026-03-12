/*
 * @lc app=leetcode.cn id=34 lang=javascript
 * @lcpr version=30400
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let left = 0, right = nums.length - 1
  while(left < right) {
    let mid = Math.floor(left + (right - left) / 2)
    if(nums[mid] < target) {
      // 中间值小于目标值，说明在右侧，收缩左边界
      left = mid + 1
    } else {
      // 中间值大于等于目标值，说明在左边界在左侧，包含mid，收缩右边界
      right = mid
    }
  }
  // 是否找到目标值
  if (nums[left] !== target) {
    return [-1,-1]
  }
  const leftBound = left
  right = nums.length - 1
  // 右边界
  while(left < right) {
    let mid = Math.floor(left+(right - left + 1)/2)
    if(nums[mid] > target) {
      // 中间值大于目标值，说明右边界在左侧，收缩右边界
      right = mid - 1
    } else {
      // 中间值小于等于目标值，说明右边界在右侧，包含mid，收缩左边界
      left = mid
    }
  }  
  return [leftBound, left] // left就是右边界
};
// @lc code=end



/*
// @lcpr case=start
// [5,7,7,8,8,10]\n8\n
// @lcpr case=end

// @lcpr case=start
// [5,7,7,8,8,10]\n6\n
// @lcpr case=end

// @lcpr case=start
// []\n0\n
// @lcpr case=end

 */

