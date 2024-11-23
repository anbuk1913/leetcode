/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let ans=0
    for(let i=0;i<jewels.length;i++){
        let count=0
        for(let j=0;j<stones.length;j++){
            if(stones[j]==jewels[i]) count++
        }
        ans+=count
    }
    return ans
};