/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const output = [];
  let intervalInserted = false;

  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][1] < newInterval[0] || intervalInserted) {
      output.push(intervals[i]);
      continue;
    }

    if (newInterval[1] < intervals[i][0]) {
      output.push(newInterval);
      output.push(intervals[i]);
      intervalInserted = true;
      continue;
    }

    const start = intervals[i][0] < newInterval[0] ? intervals[i][0] : newInterval[0];

    while (i + 1 < intervals.length && intervals[i + 1][0] <= newInterval[1]) {
      i++;
    }

    const end = intervals[i][1] > newInterval[1] ? intervals[i][1] : newInterval[1];

    output.push([start, end]);
    intervalInserted = true;
  }

  if (!intervalInserted) {
    output.push(newInterval);
  }

  return output;
};
