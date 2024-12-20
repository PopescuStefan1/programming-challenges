/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // const output = [];

  // intervals.sort((a, b) => a[0] - b[0]);

  // for(let i = 0; i < intervals.length; i++) {
  //     let j = 0;
  //     let intervalEnd = intervals[i][1];
  //     while(i + j + 1 < intervals.length && intervalEnd >= intervals[i + j + 1][0]) {
  //         intervalEnd = intervalEnd < intervals[i + j + 1][1] ? intervals[i + j + 1][1] : intervalEnd;
  //         j++;
  //     }
  //     output.push([intervals[i][0], intervalEnd]);
  //     i += j;
  // }

  // return output;

  // OR

  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [];
  let prev = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    let interval = intervals[i];
    if (interval[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], interval[1]);
    } else {
      merged.push(prev);
      prev = interval;
    }
  }

  merged.push(prev);
  return merged;
};
