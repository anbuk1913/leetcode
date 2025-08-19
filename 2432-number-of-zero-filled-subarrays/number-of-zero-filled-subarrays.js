/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let ans = 0
    let tem = 0
    for (const i of nums) {
        if(i === 0){
            tem++
            ans+=tem
        } else {
            tem = 0
        }
    }
    return ans
};