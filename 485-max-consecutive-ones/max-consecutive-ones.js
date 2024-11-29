/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max=0
    let t=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]==0){
            if(t>max){
                max=t
            }
            t=0
        }else{
            t++
        }

    }
    if(t>max){
        max=t
    }
    return max
};