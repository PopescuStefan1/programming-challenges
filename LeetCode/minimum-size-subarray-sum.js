/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0;
  let right = 0;

  let minimumLength = Number.MAX_SAFE_INTEGER;
  let currentSum = nums[0];
  let found = false;
  while (right < nums.length) {
    if (currentSum >= target) {
      found = true;
      minimumLength = minimumLength > right - left + 1 ? right - left + 1 : minimumLength;
      currentSum -= nums[left];
      left++;
      continue;
    }

    right++;
    currentSum += nums[right];
  }

  return found ? minimumLength : 0;
};
