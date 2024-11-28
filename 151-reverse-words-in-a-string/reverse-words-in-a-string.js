/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let str=''
    let arr=[]
    for(let i=0;i<s.length;i++){
        if(s[i]!=" "){
            str+=s[i]
        }
        else if(str!=""){
            arr.push(str)
            str=''
        }
    }
    if(str!="") arr.push(str)
    return arr.reverse('').join(" ")
};