/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  function comb(num) {
    if (arr.length === k) {
      output.push([...arr]);
      return;
    }

    for (let i = num; i <= n; i++) {
      arr.push(i);
      comb(i + 1);
      arr.pop();
    }
  }

  const output = [];
  const arr = [];
  comb(1);
  return output;
};
