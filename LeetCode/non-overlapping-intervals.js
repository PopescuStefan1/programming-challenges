/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let removedCount = 0;

  let prev = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < prev[1]) {
      if (intervals[i][1] < prev[1]) {
        prev = intervals[i];
      }

      removedCount++;
      continue;
    }

    prev = intervals[i];
  }

  return removedCount;
};
