// Write a function to find the longest common prefix string amongst an array of strings.
//
//   If there is no common prefix, return an empty string "".
//
//
//
//   Example 1:
//
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:
//
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
//
//
//   Constraints:
//
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.

let longestCommonPrefix1 = function(strs) {
  let res = '';
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (!(strs[j][i] && strs[0][i] && strs[j][i] === strs[0][i])) {
        return res;
      }
    }
    res += strs[0][i]
  }
  return res;
};

// хуже по времени выполнения, но выглядит более локанично

let longestCommonPrefix2 = function(strs) {
  if (!strs.length) return '';
  for (let i = 0; i < strs.length; i++) {
    if (!strs.every(str => str[i] === strs[0][i])) {
      return strs[0].slice(0, i)
    }
  }
  return strs[0];
};

console.log(longestCommonPrefix1(["flower","flow","flight"]))
console.log(longestCommonPrefix1(["aa","ab"]))
console.log(longestCommonPrefix1(["ab", "a"]))

console.log(longestCommonPrefix2(["flower","flow","flight"]))
console.log(longestCommonPrefix2(["aa","ab"]))
console.log(longestCommonPrefix2(["ab", "a"]))