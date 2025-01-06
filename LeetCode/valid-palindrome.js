/**
 * @param {string} s
 * @return {boolean}
 */
function isAlphanumeric(c) {
  const charcode = c.toLowerCase().charCodeAt(0);
  return (
    (charcode >= "a".charCodeAt(0) && charcode <= "z".charCodeAt(0)) ||
    (charcode >= "0".charCodeAt(0) && charcode <= "9".charCodeAt(0))
  );
}

var isPalindrome = function (s) {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (!isAlphanumeric(s[i])) {
      i++;
      continue;
    }

    if (!isAlphanumeric(s[j])) {
      j--;
      continue;
    }

    if (s[i].toLowerCase() !== s[j].toLowerCase()) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};
