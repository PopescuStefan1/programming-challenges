/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // First solution:
  //   let zeroesCount = 0;
  //   let onesCount = 0;
  //   let twosCount = 0;

  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] === 0) {
  //       zeroesCount++;
  //     } else if (nums[i] === 1) {
  //       onesCount++;
  //     } else {
  //       twosCount++;
  //     }
  //   }

  //   for (let i = 0; i < nums.length; i++) {
  //     if (zeroesCount > 0) {
  //       nums[i] = 0;
  //       zeroesCount--;
  //       continue;
  //     }

  //     if (onesCount > 0) {
  //       nums[i] = 1;
  //       onesCount--;
  //       continue;
  //     }

  //     nums[i] = 2;
  //   }

  // Second solution(one-pass and constant space)
  let left = 0;
  let right = nums.length - 1;

  while (nums[left] === 0) {
    left++;
  }

  while (nums[right] === 2) {
    right--;
  }

  let currentIndex = left;

  while (currentIndex <= right) {
    if (nums[currentIndex] === 2) {
      [nums[currentIndex], nums[right]] = [nums[right], nums[currentIndex]];
      right--;
      continue;
    }

    if (nums[currentIndex] === 0) {
      [nums[currentIndex], nums[left]] = [nums[left], nums[currentIndex]];
      left++;
    }

    currentIndex++;
  }
};
