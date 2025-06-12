/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0
    for(let i=0;i<s.length;i++){
        let str=""
        for(let j=i;j<s.length;j++){
            if(!str.includes(s[j])){
                str+=s[j]
            } else {
                break
            }
        }
        if(max<str.length){
            max = str.length
        }
    }
    return max
};