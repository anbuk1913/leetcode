/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    nums.sort((a,b)=>a-b)
    let count=1
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0){
            if(nums[i]==count)
                count++
            else if(nums[i]==count-1)
                continue
            else if(nums[i]!=count)
                return count
        }
    }
    return count
};