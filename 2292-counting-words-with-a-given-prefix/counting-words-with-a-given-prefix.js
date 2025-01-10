/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let count=0
    for(let i of words ){
        let t=0
        for(let j=0;j<pref.length;j++){
            if(i[j]==pref[j]){
                t++
            } else {
                break
            }
        }
        if(t==pref.length)count++
    }
    return count
};