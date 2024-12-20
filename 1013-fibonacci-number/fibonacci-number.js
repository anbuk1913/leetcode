/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n<2)return n
    let arr=[0,1]
    for(let i=1;i<n;i++){
        arr.push(arr[i-1]+arr[i])
    }
    return arr[arr.length-1]
};