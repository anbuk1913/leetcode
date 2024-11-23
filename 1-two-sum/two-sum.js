/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map1 = new Map()
    for(let i=0;i<nums.length;i++){
        let comp = target - nums[i]
        if(map1.has(comp))
            return [map1.get(comp),i]
        map1.set(nums[i],i)
    }
};