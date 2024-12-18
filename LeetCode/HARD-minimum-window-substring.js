/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  // Initial solution:
  const charMap = new Map();
  [...t].forEach((char) => {
    charMap.set(char, charMap.has(char) ? charMap.get(char) + 1 : 1);
  });

  let left = 0;
  let right = -1;
  let minLength = Number.MAX_SAFE_INTEGER;
  let bestLeft = -1;
  let bestRight = -1;
  while (right <= s.length) {
    if (!charMap.has(s[left])) {
      left++;
      if (left > right) {
        right++;
      }
      continue;
    }

    if ([...charMap.values()].every((value) => value <= 0)) {
      if (minLength > right - left + 1) {
        minLength = right - left + 1;
        bestLeft = left;
        bestRight = right;
      }
    }

    if (charMap.get(s[left]) <= -1) {
      charMap.set(s[left], charMap.get(s[left]) + 1);
      left++;
    } else {
      right++;
      if (charMap.has(s[right])) {
        charMap.set(s[right], charMap.get(s[right]) - 1);
      }
    }
  }

  return bestLeft === -1 ? "" : s.slice(bestLeft, bestRight + 1);
};
