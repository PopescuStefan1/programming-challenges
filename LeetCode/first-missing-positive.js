/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  // First solution (doesn't respect O(1) space requirement):
  // const set = new Set();
  // for(let number of nums) {
  //     if(number > 0) {
  //         set.add(number);
  //     }
  // }

  // for(let i = 1; i < Number.MAX_SAFE_INTEGER; i++) {
  //     if(!set.has(i)) {
  //         return i;
  //     }
  // }

  // Second solution (hash index) O(n) time and O(1) space:
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] !== i + 1 && nums[i] > 0 && nums[i] <= nums.length && nums[i] !== nums[nums[i] - 1]) {
      const value = nums[i];
      [nums[i], nums[value - 1]] = [nums[value - 1], nums[i]];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return nums.length + 1;
};
