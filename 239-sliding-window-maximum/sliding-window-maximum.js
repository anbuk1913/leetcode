/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const res = []
    const deque = []
    for (let right=0;right<nums.length;right++){
        while(deque.length&&nums[deque[deque.length-1]]<nums[right]){
            deque.pop()
        }
        deque.push(right)
        const left = right-k+1
        if (deque[0]<left){
            deque.shift()
        }
        if(right>=k-1){
            res.push(nums[deque[0]])
        }
    }
    return res
};