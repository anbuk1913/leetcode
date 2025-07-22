/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    let upp = "BCDFGHJKLMNPQRSTVWXYZ"
    let low = 'bcdfghjklmnpqrstvwxyz'
    let num = "1234567890"
    let lowVow = 'aeiou'
    let uppVow = "AEIOU"
    let alp = false
    let vow = false
    if(word.length<3)return false
    for(let i of word){
        if(num.includes(i)){
            continue
        } else {
            if(upp.includes(i)||low.includes(i)){
                alp = true
            } else if (lowVow.includes(i)||uppVow.includes(i)){
                vow = true
            } else {
                return false
            }
        }
    }
    
    if(vow && alp){
        return true
    } else {
        return false
    }
};