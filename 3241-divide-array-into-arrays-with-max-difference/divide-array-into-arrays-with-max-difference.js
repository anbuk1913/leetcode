/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    nums.sort((a,b)=>a-b)
    let ans = []
    let count = 1
    for(let i=2;i<nums.length;i+=3){
        if(nums[i]-nums[i-2]<=k){
            ans.push([nums[i],nums[i-1],nums[i-2]])
        } else {
            return []
        }
    }
    return ans
};