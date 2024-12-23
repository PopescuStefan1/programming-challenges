/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // First solution:
  // const prefixes = Array(nums.length);
  // const suffixes = Array(nums.length);

  // prefixes[0] = nums[0];
  // for(let i = 1; i < nums.length; i++) {
  //     prefixes[i] = prefixes[i - 1] * nums[i];
  // }

  // suffixes[nums.length - 1] = nums[nums.length - 1];
  // for(let i = nums.length - 2; i >= 0; i--) {
  //     suffixes[i] = suffixes[i + 1] * nums[i];
  // }

  // const results = Array(nums.length);
  // results[0] = suffixes[1];
  // results[nums.length - 1] = prefixes[nums.length - 2];
  // for(let i = 1; i < nums.length - 1; i++) {
  //     results[i] = prefixes[i - 1] * suffixes[i + 1];
  // }

  // return results;

  // Second solution:
  const results = Array(nums.length);
  let prefix = nums[0];
  results[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    results[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    results[i] *= suffix;
    suffix *= nums[i];
  }

  return results;
};
