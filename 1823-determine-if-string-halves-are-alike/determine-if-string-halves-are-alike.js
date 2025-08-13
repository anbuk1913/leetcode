/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const vow = "aeiouAEIOU"
    let fh=0, sh=0
    for(let i=0,j=s.length-1;i<s.length/2;i++,j--){
        if(vow.includes(s[i])){
            fh++
        }
        if(vow.includes(s[j])){
            sh++
        }
    }
    return fh === sh
};