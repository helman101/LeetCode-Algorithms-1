// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Example 4:

// Input: nums = [1,3,5,6], target = 0
// Output: 0

// Example 5:

// Input: nums = [1], target = 0
// Output: 0

// Constraints:

//     1 <= nums.length <= 104
//     -104 <= nums[i] <= 104
//     nums contains distinct values sorted in ascending order.
//     -104 <= target <= 104



var searchInsert = function(nums, target, s = 0, e = nums.length-1) {
  let m = Math.floor((e+s)/2);
  
  if (nums[m] == target || s >= e) {
      console.log(nums[m], target)
      return nums[m] >= target ? m : m+1;
  };
  
  if (nums[m] > target) {
      return searchInsert(nums, target, s, m-1);
  } else {
      return searchInsert(nums, target, m+1, e);
  }
};