/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  // First solution (brute force):
  // const answers = [];
  // for(let i = 0; i < temperatures.length; i++) {
  //     let days = 0;
  //     for(let j = i + 1; j < temperatures.length; j++) {
  //         if(temperatures[j] > temperatures[i]) {
  //             days = j - i;
  //             break;
  //         }
  //     }
  //     answers.push(days);
  // }
  // return answers;

  // Second solution:
  // const tempMap = new Map();
  // const answers = [];
  // for(let i = temperatures.length - 1; i >= 0; i--) {
  //     tempMap.set(temperatures[i], i);

  //     let minDistance = 100000;
  //     for(const [key, value] of tempMap) {
  //         if(key > temperatures[i] && minDistance > value - i) {
  //             minDistance = value - i;
  //         }
  //     }
  //     answers.push(minDistance === 100000 ? 0 : minDistance);
  // }
  // return answers.reverse();

  // Third solution:
  const stack = [];
  const results = Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
      const idx = stack.pop();
      results[idx] = i - idx;
    }

    stack.push(i);
  }

  return results;
};
