/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let s=String(n)
    let mul=1
    let sum=0
    for(let i=0;i<s.length;i++){
        mul*=Number(s[i])
        sum+=Number(s[i])
    }
    return mul-sum
};