/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let max = 1
    let obj = {}
    for(let i=0;i<nums.length;i++){
        if(obj[nums[i]]){
            obj[nums[i]].fre++
            obj[nums[i]].ind[1] = i
            if(max<obj[nums[i]].fre){
                max = obj[nums[i]].fre
            }
        } else {
            obj[nums[i]] = {
                fre : 1,
                ind : [i]
            }
        }
    }
    let ans = nums.length
    if(max == 1){
        return 1
    } else {
        for(let i in obj){
            if(obj[i].fre==max){
                if(obj[i].ind[1]-obj[i].ind[0]+1<ans){
                    ans = obj[i].ind[1]-obj[i].ind[0]+1
                }
            }
        }
    }
    return ans
};