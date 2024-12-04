/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
let max=-Infinity
let mind=0
let sec=-Infinity
let sind=0
for(let i=0;i<nums.length;i++){
    if(nums[i]>max){
        sec=max
        max=nums[i]
        sind=mind
        mind=i
    }
    else if(sec<nums[i] && max>nums[i]){
        sec=nums[i]
        sind=i
    }
}
if(max>=2*sec)return mind
else return -1
};