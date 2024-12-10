/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count=0
    for(let i=0;i<nums.length;i++){
        let t1=nums[i];
        if(t1==k){
            count++
        }
        for(let j=i+1;j<nums.length;j++){
            t1+=nums[j]
            if(t1==k){
                count++
            }
        }
    }
    return count
};