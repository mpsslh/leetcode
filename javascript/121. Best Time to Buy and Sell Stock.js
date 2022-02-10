/**
 * @param {number[]} prices
 * @return {number}
 */
//return maximum profit
//directional

//Brute force
// TC : O(N ^ 2), SC : O(1)
var maxProfit = function (prices) {
  //nested loop
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      max = Math.max(max, prices[j] - prices[i]);
    }
  }
  return max;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
//1. Take two variables and check for minimum so far and keep calculating max profit
//TC : O(N), SC : O(1)
var maxProfit = function (prices) {
  let minSoFar = prices[0],
    maximumProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    minSoFar = Math.min(minSoFar, prices[i]);
    maximumProfit = Math.max(maximumProfit, prices[i] - minSoFar);
  }
  return maximumProfit;
};
