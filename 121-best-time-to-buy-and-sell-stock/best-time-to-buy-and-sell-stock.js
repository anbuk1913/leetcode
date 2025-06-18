/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let ans = 0
    let price = prices[0]
    for(let i=1;i<prices.length;i++){
        if(price>prices[i]){
            price = prices[i]
        }
        ans = Math.max(ans,prices[i]-price)
    }
    return ans
};