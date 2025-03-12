// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
//
//   Example 1:
//
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:
//
// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.
//
//
// Constraints:
//
//   1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.

let strStr = function(haystack, needle) {
  if (!haystack.includes(needle)) return -1;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) return i;
  }
};

console.log(strStr("sadbutsad","sad"));
console.log(strStr("sasaddbutsad","sad"));
console.log(strStr("leetcode","leeto"));