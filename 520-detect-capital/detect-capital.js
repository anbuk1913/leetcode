/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let Up=false
    let Lo=false

    let upper="QWERTYUIOPASDFGHJKLZXCVBNM"
    let lower="qwertyuiopasdfghjklzxcvbnm"

    for(let i=0;i<word.length;i++){
        if(upper.includes(word[i])&&i==0)continue
        if(lower.includes(word[i]))Up=true
        else Lo = true
        if(Up && Lo){
            return false
            break
        }
    }


return true
};