/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let count=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]==0){
            for(let j=i;j<nums.length;j++){
                if(j+1 == nums.length)break
                let t = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = t
            }
            if(count>nums.length)break
            count++
            i--
        }
    }
};