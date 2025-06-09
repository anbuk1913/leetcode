/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    allowed = allowed.split("")
    let count = 0
    for(let i of words){
        let tem = 0
        for(let j of i){
            if(allowed.includes(j)){
                tem++
            } else {
                break
            }
        }
        if(tem == i.length){
            count++
        }
    }
    return count
};