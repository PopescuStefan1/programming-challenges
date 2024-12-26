/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const charMap = new Map();

  for (let i = 0; i < ransomNote.length; i++) {
    charMap.set(ransomNote[i], (charMap.get(ransomNote[i]) || 0) + 1);
  }

  let charsLeft = ransomNote.length;

  for (let i = 0; i < magazine.length; i++) {
    if (charsLeft === 0) {
      break;
    }

    if (charMap.get(magazine[i]) > 0) {
      charMap.set(magazine[i], charMap.get(magazine[i]) - 1);
      charsLeft--;
    }
  }

  return charsLeft === 0;
};
