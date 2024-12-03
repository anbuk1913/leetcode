/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let str=""
    let count=0
    for(let i=0;i<s.length;i++){
        if(i==spaces[count]){
            str+=" "
            count++
        }
        if(i<s.length)
        str+=s[i]
    }
    return str
};