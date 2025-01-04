/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const charMap = new Map();
  for (let i = 0; i < s.length; i++) {
    charMap.set(s[i], (charMap.get(s[i]) || 0) + 1);
  }

  for (let i = 0; i < t.length; i++) {
    if (!charMap.has(t[i]) || charMap.get(t[i]) === 0) {
      return false;
    }

    charMap.set(t[i], charMap.get(t[i]) - 1);
  }

  return true;
};
