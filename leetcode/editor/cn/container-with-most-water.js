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
  let max = 0, left = 0, right = height.length - 1
  while(left < right) {
    const h = Math.min(height[left], height[right])
    const w = right - left
    max = Math.max(h * w, max)
    // 移动短指针
    if(height[left] < height[right]) {
      left++
    } else {
      right--
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

