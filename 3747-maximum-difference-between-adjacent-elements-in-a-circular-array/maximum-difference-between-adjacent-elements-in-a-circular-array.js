/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
    let max = 0
    for(let i=1;i<nums.length;i++){
        let tem = nums[i]-nums[i-1]
        if(tem<0){
            tem*=-1
        }
        if(max<tem){
            max = tem
        }
    }
    let tem = nums[0]-nums[nums.length-1]
    if(tem<0){
        tem*=-1
    }
    if(max<tem){
        max = tem
    }
    return max
};