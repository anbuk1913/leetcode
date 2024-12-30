/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    let t=num.length-1
    for(;t>=0;t--)if(num[t]!=0)break
    return num.slice(0,t+1)
};