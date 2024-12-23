/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // First solution (brute force) - Time: O(n^2), Space: O(1):
  // let bestProfit = 0;
  // for(let i = 0; i < prices.length - 1; i++) {
  //     for(let j = i + 1; j < prices.length; j++) {
  //         if(prices[j] - prices[i] > bestProfit) {
  //             bestProfit = prices[j] - prices[i];
  //         }
  //     }
  // }
  // return bestProfit;

  // Second solution (one pass) - Time: O(n), Space: O(1):
  // let bestProfit = 0;
  // let current = 0;
  // for(let i = 1; i < prices.length; i++) {
  //     current += prices[i] - prices[i - 1];
  //     if(current > bestProfit) {
  //         bestProfit = current;
  //     }

  //     current = Math.max(current, 0);
  // }

  // return bestProfit;

  // Third solution (one pass) - Time: O(n), Space: O(1):
  let bestProfit = 0;
  let cheapest = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < cheapest) {
      cheapest = prices[i];
      continue;
    }

    if (bestProfit < prices[i] - cheapest) {
      bestProfit = prices[i] - cheapest;
    }
  }

  return bestProfit;
};
