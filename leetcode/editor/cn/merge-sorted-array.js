/*
 * @lc app=leetcode.cn id=88 lang=javascript
 * @lcpr version=30400
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1; // nums1 的末尾有效索引
    let j = n - 1; // nums2 的末尾有效索引
    let k = m + n - 1; // 合并后数组的有效索引
    while(i >= 0 && j >= 0) {
      if(nums1[i] > nums2[j]) { // nums1 的末尾元素大于num2的末尾元素
        nums1[k--] = nums1[i--]
      } else {
        nums1[k--] = nums2[j--]
      }
    }
    while(j >= 0) {
      nums1[k--] = nums2[j--]
    }
    return nums1
};
// @lc code=end


console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))
console.log(merge([1], 1, [], 0))
console.log(merge([0], 0, [1], 1))
/*
// @lcpr case=start
// [1,2,3,0,0,0]\n3\n[2,5,6]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n[]\n0\n
// @lcpr case=end

// @lcpr case=start
// [0]\n0\n[1]\n1\n
// @lcpr case=end

 */

