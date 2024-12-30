/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    for(let t=num.length-1;t>=0;t--)if(num[t]!=0)return num.slice(0,t+1)
};