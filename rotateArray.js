

var rotate = function(nums, k) {
  let index = nums.length
  if (k >= index) {
      k = k%index
  }
  
  let last = nums.splice(index-k)
  nums.unshift(...last)
};