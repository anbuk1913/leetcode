/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    for(let i=num.length-1;i>=0;i--){
        if(Number(num[i])%2==0){
            num=num.slice(0,i)
        } else {
            return num
        }
    }
    return ""
};