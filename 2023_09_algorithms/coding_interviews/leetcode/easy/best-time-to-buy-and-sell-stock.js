/**
 * @param {number[]} prices
 * @return {number}
 */
export default function bestTimeBuySellStock(prices) {
  let max_profit = 0;
  let min = prices[0];
  for (let index = 1; index < prices.length; index++) {
    max_profit = Math.max(prices[index] - min, max_profit)
    if (prices[index] < min) {
      min = prices[index]
    }
  }
  return max_profit
}