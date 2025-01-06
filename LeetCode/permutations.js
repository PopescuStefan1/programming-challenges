/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  // First solution:
  //   function dfs(idx) {
  //     if (arr.length === nums.length) {
  //       output.push([...arr]);
  //       return;
  //     }

  //     for (let i = 0; i < nums.length; i++) {
  //       if (arr.includes(nums[i])) {
  //         continue;
  //       }

  //       arr.push(nums[i]);
  //       dfs(i + 1);
  //       arr.pop();
  //     }
  //   }

  //   const output = [];
  //   const arr = [];
  //   dfs(0);
  //   return output;

  // Second solution (using set):
  function dfs() {
    if (set.size === nums.length) {
      output.push([...set]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (set.has(nums[i])) {
        continue;
      }

      set.add(nums[i]);
      dfs();
      set.delete(nums[i]);
    }
  }

  const output = [];
  const set = new Set();
  dfs();
  return output;
};
