/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  function subsets(idx) {
    output.push([...arr]);

    for (let i = idx; i < nums.length; i++) {
      arr.push(nums[i]);
      subsets(i + 1);
      arr.pop();
    }
  }

  const output = [];
  const arr = [];
  subsets(0);
  return output;
};
