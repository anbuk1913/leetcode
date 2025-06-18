/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    let  ans = []
    for(let i of nums){
        if(i%2){
            ans.push(1)
        } else {
            ans.unshift(0)
        }
    }
    return ans
};