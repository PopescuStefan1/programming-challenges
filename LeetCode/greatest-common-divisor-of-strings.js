/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  if (str1.concat(str2) !== str2.concat(str1)) {
    return "";
  }

  const gcd = findGcd(str1.length, str2.length);

  return str1.slice(0, gcd);
};

function findGcd(num1, num2) {
  if (num1 === num2) {
    return num1;
  }

  if (num1 > num2) {
    return findGcd(num1 - num2, num2);
  }

  return findGcd(num1, num2 - num1);
}
