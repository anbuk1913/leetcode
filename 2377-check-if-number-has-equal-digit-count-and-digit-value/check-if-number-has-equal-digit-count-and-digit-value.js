/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    let arr = new Array(num.length).fill(0)
    for(let i of num){
        arr[i]++
    }
    arr = arr.join("")
    return arr===num
};