/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let arr = []

    function findComb(start, target, tempArr) {
        if (target === 0) {
            arr.push([...tempArr])
            return
        }
        if (target < 0) return 
        for (let i = start; i < candidates.length; i++) {
            tempArr.push(candidates[i])
            findComb(i, target - candidates[i], tempArr)
            tempArr.pop()
        }
    }
    findComb(0,target,[])
    return arr
};