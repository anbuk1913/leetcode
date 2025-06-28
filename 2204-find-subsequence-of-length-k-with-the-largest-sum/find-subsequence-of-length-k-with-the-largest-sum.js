/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    let ans = []
    let tem = []
    let max = -Infinity
    let temArr = [...nums]
    temArr.sort((a,b)=>b-a)
    for(let i=0;i<k;i++){
        tem.push(temArr[i])
    }
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<tem.length;j++){
            if(tem[j]==nums[i]){
                ans.push(nums[i])
                tem.splice(j,1)
                break
            }
        }
    }
    return ans
};