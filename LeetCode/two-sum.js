/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // First solution (brute force):
  // for(let i = 0; i < nums.length - 1; i++) {
  //     for(let j = i + 1; j < nums.length; j++) {
  //         if(nums[i] + nums[j] === target) {
  //             return [i, j];
  //         }
  //     }
  // }

  // Second solution (hashmap):
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [i, map.get(target - nums[i])];
    }

    map.set(nums[i], i);
  }
};
