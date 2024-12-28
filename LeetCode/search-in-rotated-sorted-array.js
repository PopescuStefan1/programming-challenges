/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // First solution:
  // let left = 0;
  // let right = nums.length - 1;
  // let boundaryIdx = -1;

  // while(left <= right) {
  //     const mid = Math.floor((left + right) / 2);

  //     if(nums[mid] <= nums[nums.length - 1]) {
  //         boundaryIdx = mid;
  //         right = mid - 1;
  //     } else {
  //         left = mid + 1;
  //     }
  // }

  // if(target <= nums[nums.length - 1]) {
  //     left = boundaryIdx > 0 ? boundaryIdx : 0;
  //     right = nums.length - 1;
  // } else {
  //     left = 0;
  //     right = boundaryIdx > 0 ? (boundaryIdx - 1) : (nums.length - 1);
  // }

  // while(left <= right) {
  //     const mid = Math.floor((left + right) / 2);

  //     if(nums[mid] === target) {
  //         return mid;
  //     }

  //     if(nums[mid] < target) {
  //         left = mid + 1;
  //         continue;
  //     }

  //     right = mid - 1;
  // }

  // return (-1);

  // Second solution:
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};
