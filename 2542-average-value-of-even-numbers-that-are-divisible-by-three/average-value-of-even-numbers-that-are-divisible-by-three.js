/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let ans = 0
    let count = 0
    for(let i=0;i<nums.length;i++){
        if(nums[i]%3==0 && nums[i]%2==0){
            ans+=nums[i]
            count++
        }
    }
    return ans!=0 ? Math.floor(ans/count) : 0
};