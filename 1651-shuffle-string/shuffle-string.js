/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let ans=''
    for(let i=0;i<s.length;i++){
        for(let j=0;j<s.length;j++)
        if(i==indices[j])ans+=s[j]
    }
    return ans
};