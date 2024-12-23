/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // Time: O(n), Space: O(1):
  let sum = 0;
  let bestSum = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    bestSum = Math.max(bestSum, sum);
    sum = Math.max(sum, 0);
  }

  return bestSum;
};
