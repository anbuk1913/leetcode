/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    let  ans = []
    let pos = 0
    for(let i of nums){
        if(i%2==0){
            pos++
        }
    }
    for(let i=0;i<nums.length;i++){
        if(i<pos){
            ans.push(0)
        } else {
            ans.push(1)
        }
    }
    return ans
};