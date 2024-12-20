/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function (heights) {
  // First solution:
  // const res = [];
  // for(let i = 0; i < heights.length - 1; i++) {
  //     let maxHeight = 0;
  //     let numVisible = 0;
  //     for(let j = i + 1; j < heights.length; j++) {
  //         if(heights[i] > maxHeight && heights[j] > maxHeight) {
  //             maxHeight = heights[j];
  //             numVisible++;
  //         }

  //         if(heights[i] <= maxHeight) {
  //             break;
  //         }
  //     }
  //     res.push(numVisible);
  // }
  // res.push(0);
  // return res;

  let stack = [];
  let res = Array(heights.length).fill(0);

  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] <= heights[i]) {
      const id = stack.pop();
      res[id]++;
    }

    if (stack.length > 0) {
      res[stack[stack.length - 1]]++;
    }

    stack.push(i);
  }

  return res;
};
