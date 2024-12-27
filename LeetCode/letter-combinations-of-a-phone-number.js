/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) {
    return [];
  }

  const charMapping = [
    ["a", "b", "c"], // 2
    ["d", "e", "f"], // 3
    ["g", "h", "i"], // 4
    ["j", "k", "l"], // 5
    ["m", "n", "o"], // 6
    ["p", "q", "r", "s"], // 7
    ["t", "u", "v"], // 8
    ["w", "x", "y", "z"], //9
  ];

  function dfs(idx, s) {
    if (idx > digits.length - 1) {
      output.push(s);
      return;
    }

    // Subtract 2 since array is 0-indexed
    for (let i = 0; i < charMapping[Number(digits[idx] - 2)].length; i++) {
      dfs(idx + 1, s + charMapping[Number(digits[idx] - 2)][i]);
    }
  }

  const output = [];
  // Use digit index inside string to track dfs
  dfs(0, "");
  return output;
};
