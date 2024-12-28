/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  // First solution:
  //   function areArraysEqual(arr1, arr2) {
  //     if (arr1.length !== arr2.length) {
  //       return false;
  //     }
  //     const map = new Map();
  //     for (let el of arr1) {
  //       map.set(el, (map.get(el) || 0) + 1);
  //     }
  //     for (let el of arr2) {
  //       if (!map.has(el) || map.get(el) <= 0) {
  //         return false;
  //       }
  //       map.set(el, map.get(el) - 1);
  //     }
  //     return true;
  //   }
  //   function dfs(idx) {
  //     if (!output.some((array) => areArraysEqual(array, [...arr]))) {
  //       output.push([...arr]);
  //     }
  //     for (let i = idx; i < nums.length; i++) {
  //       arr.push(nums[i]);
  //       dfs(i + 1);
  //       arr.pop();
  //     }
  //   }
  //   const output = [];
  //   const arr = [];
  //   dfs(0);
  //   return output;

  // Second solution:
  function dfs(idx) {
    output.push([...arr]);

    for (let i = idx; i < nums.length; i++) {
      if (i !== idx && nums[i] === nums[i - 1]) {
        continue;
      }

      arr.push(nums[i]);
      dfs(i + 1);
      arr.pop();
    }
  }

  const output = [];
  const arr = [];
  nums.sort((a, b) => a - b);
  dfs(0);
  return output;
};
