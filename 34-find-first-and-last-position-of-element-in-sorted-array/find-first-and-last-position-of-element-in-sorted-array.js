/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let res = [-1,-1]
    let count = 0
    let start
    for(let i=0;i<nums.length;i++){
        if(nums[i]==target){
            start=i
            count++
        }
    }
    if(count!=0){
        res[0]=start-count+1
        res[1]=start
    }
    return res
};