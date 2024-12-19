/**
 * @param {string} s
 * @return {number}
 */

function fact(x) {
  if (x == 0) {
    return 1;
  }
  return x * fact(x - 1);
}

var countSubstrings = function (s) {
  if (s.length === 1) {
    return 1;
  }

  let palindromeCount = 0;
  for (let i = 0; i < s.length; i++) {
    palindromeCount++;
    if (s[i] === s[i + 1]) {
      palindromeCount++;
      let j = 1;
      while (s[i - j] === s[i + 1 + j]) {
        if (i - j < 0 || i + 1 + j > s.length) {
          break;
        }

        palindromeCount++;
        j++;
      }
    }

    if (s[i - 1] === s[i + 1]) {
      palindromeCount++;
      let j = 1;
      while (s[i - 1 - j] === s[i + 1 + j]) {
        if (i - 1 - j < 0 || i + 1 + j > s.length) {
          break;
        }

        palindromeCount++;
        j++;
      }
    }
  }

  return palindromeCount;
};
