/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  function generateParanthesis(left, right, s) {
    if (right === 0) {
      output.push(s);
      return;
    }

    if (left > 0) {
      generateParanthesis(left - 1, right, s + "(");
    }

    if (right > left) {
      generateParanthesis(left, right - 1, s + ")");
    }
  }

  const output = [];
  generateParanthesis(n, n, "");
  return output;
};
