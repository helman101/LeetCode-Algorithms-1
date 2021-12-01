// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?

var sortedSquares = function(nums) {
  let squares = nums.map((num) => num*num)
  return sort(squares)
};

let sort = (arr) => {
  if (arr.length <= 1) {
      return arr
  }
  
  let index = Math.round(arr.length/2);
  let pivot = arr[index];
  
  let left = [];
  let rigth = [];
  
  for (i = 0; i<arr.length; i++) {
      if (i == index) {
          continue
      }
      
      if (arr[i] < pivot) {
          left.push(arr[i])
      } else {
          rigth.push(arr[i])
      }
  }
  
  left = sort(left);
  rigth = sort(rigth);
  
  return left.concat([pivot]).concat(rigth)
};