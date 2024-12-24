/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let i=1,t=1
    if(n==1)return true
    while(t<=n){
        t=1
        for(let j=1;j<=i;j++)t*=3
        if(t==n)return true
        i++
    }
    return false
};