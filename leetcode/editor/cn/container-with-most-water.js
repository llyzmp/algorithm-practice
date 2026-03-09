/*
 * @lc app=leetcode.cn id=11 lang=javascript
 * @lcpr version=30202
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0, right = height.length - 1
  let max = 0
  while(left < right) {
    const area = (right - left) * Math.min(height[left], height[right])
    if(max < area) {
      max = area
    }
    if(height[left] > height[right]) {
      right--
    }else {
      left++
    }
  }
  return max
};
// @lc code=end


console.log(maxArea([1,8,6,2,5,4,8,3,7]))

/*
// @lcpr case=start
// [1,8,6,2,5,4,8,3,7]\n
// @lcpr case=end

// @lcpr case=start
// [1,1]\n
// @lcpr case=end

 */

