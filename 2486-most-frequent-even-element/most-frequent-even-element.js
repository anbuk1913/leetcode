/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let obj = {}
    let max = 0
    let ans = -1
    for(let i of nums){
        if(i%2===0){    
            if(obj[i]){
                obj[i]++
                if(max<obj[i]){
                    max = obj[i]
                    ans = i
                } else if(max==obj[i] && i<ans) {
                    max = obj[i]
                    ans = i
                }
            } else {
                obj[i]=1
                if(max<obj[i]){
                    max = obj[i]
                    ans = i
                } else if(max==obj[i] && i<ans) {
                    max = obj[i]
                    ans = i
                }
            }
        }
    }
    return ans
};