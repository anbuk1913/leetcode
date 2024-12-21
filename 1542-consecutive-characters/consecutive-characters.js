/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let max=1
    let count=1
    for(let i=1;i<s.length;i++){
        if(s[i-1]==s[i]){
            count++
        } else {
            if(max<count){
                max = count
            }
            count=1
        }
    }
    if(max<count) return count
    return max
};