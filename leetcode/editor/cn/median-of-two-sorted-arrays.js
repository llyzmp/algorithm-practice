/*
 * @lc app=leetcode.cn id=4 lang=javascript
 * @lcpr version=30202
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let i = 0, j = 0;
  let merged = []
  while(i < nums1.length && j < nums2.length) {
    if(nums1[i] < nums2[j]) {
      merged.push(nums1[i++])
    } else {
      merged.push(nums2[j++])
    }
  }
  while(i < nums1.length) { merged.push(nums1[i++])}
  while(j < nums2.length) { merged.push(nums2[j++])}
  const num = Math.floor(merged.length / 2)
  return merged.length % 2 === 0 ? (merged[num] + merged[num - 1]) / 2 : merged[num]
};
// @lc code=end
console.log(findMedianSortedArrays([1,2,5],[3,4]))


/*
// @lcpr case=start
// [1,3]\n[2]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n[3,4]\n
// @lcpr case=end

 */

