/*
 * @lc app=leetcode.cn id=26 lang=javascript
 * @lcpr version=30400
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let slow = 0, fast = 1;
    while(fast < nums.length) {
      if(nums[slow] !== nums[fast]) {
        slow++
        nums[slow] = nums[fast]
      }
      fast++
    }
    return slow + 1
};
// @lc code=end
const nums1 = [1,1,2]
const len1 = removeDuplicates(nums1)
console.log(len1)
console.log(nums1);

const nums2 = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums2))
console.log(nums2);

/*
// @lcpr case=start
// [1,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,1,1,1,2,2,3,3,4]\n
// @lcpr case=end

 */

