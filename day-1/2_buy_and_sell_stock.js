/*
 * QUESTION LINK: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */

/*
 * @param {number[]} prices
 * @return {number}
 */

/*
 * BRUTE FORCE O(n2)
 var getMaxProfit = function (prices, index){
    let maxProfit = prices[index], i = index+1;
    for(i ; i < prices.length;i++){
        maxProfit = Math.max(prices[i], maxProfit);
    }
    console.log({i});
    console.log({maxProfit: maxProfit - prices[index]});
    return maxProfit - prices[index];
}
var maxProfit = function (prices) {

   const maxProfitPerDay =  prices.map((price, index)=>{
        console.log({prices, index});
        return getMaxProfit(prices, index);
    });
    console.log({maxProfitPerDay});
    console.log({maxProfitPerDay: Math.max(...maxProfitPerDay)});
    return Math.max(...maxProfitPerDay);
};
*/

// OPTIMIZED APPROACH
var maxProfit = function (prices) {
    let buy = prices[0], i = 1, profit = 0;
    for (i; i < prices.length; i++) {
        if (prices[i] > buy) {
            profit = Math.max(prices[i] - buy, profit);
        } else {
            buy = prices[i]
        }
    }
    console.log({ i });
    console.log({ profit });
    return profit;
};

// Test Case 1
const prices1 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices1));
// Test Case 2
const prices2 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices2));
// Test Case 3
const prices3 = [1, 6, 4, 12, 1];
console.log(maxProfit(prices3));