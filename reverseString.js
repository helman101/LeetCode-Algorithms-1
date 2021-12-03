

var reverseString = function(s) {
  let i = 0
  let j = s.length-1
  
  while (i < j) {
      let p = s[j]
      s[j] = s[i]
      s[i] = p
      i++
      j--
  }
};