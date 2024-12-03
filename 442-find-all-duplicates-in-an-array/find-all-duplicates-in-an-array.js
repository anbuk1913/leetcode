/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    nums.sort((a,b)=>a-b)
    let arr=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i]==nums[i+1]) arr.push(nums[i])
    }
    return arr
};