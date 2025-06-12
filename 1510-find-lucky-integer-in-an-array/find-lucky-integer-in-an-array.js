/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let obj = {}
    for(let i of arr){
        if(obj[i]){
            obj[i]++
        } else {
            obj[i] = 1
        }
    }
    let max = -1
    for(let i in obj){
        if(i == obj[i] && max<i){
            max = obj[i]
        }
    }
    return max
};