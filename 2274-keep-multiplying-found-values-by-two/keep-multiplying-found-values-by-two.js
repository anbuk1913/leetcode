/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    let tar=original
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(tar==nums[j]){
                tar*=2
            }
        }
    }
    return tar
};