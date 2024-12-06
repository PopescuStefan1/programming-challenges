/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const maxCandies = candies.reduce(
    (accumulator, currentValue) => (currentValue > accumulator ? currentValue : accumulator),
    0
  );

  return candies.map((candyCount) => candyCount + extraCandies >= maxCandies);
};
