/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
    let maxOr = 0;
    let count = 0;
    for (let num of nums) {
        maxOr |= num;
    }
    const backtrack = (index, currentOr) => {
        if (index === nums.length) {
            if (currentOr === maxOr) {
                count++;
            }
            return;
        }
        backtrack(index + 1, currentOr | nums[index]);
        backtrack(index + 1, currentOr);
    };
    backtrack(0, 0);
    return count;
};