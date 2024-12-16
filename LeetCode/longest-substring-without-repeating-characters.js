/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 1) {
    return 1;
  }

  // Initial solution using hashMap:
  //   const charMap = new Map();
  //   charMap.set(s[0], 1);

  //   let longest = 0;
  //   let left = 0;
  //   let right = 1;
  //   while (right < s.length) {
  //     while (charMap.has(s[right])) {
  //       charMap.delete(s[left]);
  //       left++;
  //     }

  //     charMap.set(s[right], 1);

  //     longest = right - left + 1 > longest ? right - left + 1 : longest;
  //     right++;
  //   }

  // Improved solution using set:
  const charSet = new Set([s[0]]);

  let longest = 0;
  let left = 0;
  let right = 1;
  while (right < s.length) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }

    charSet.add(s[right]);

    longest = right - left + 1 > longest ? right - left + 1 : longest;
    right++;
  }

  return longest;
};
