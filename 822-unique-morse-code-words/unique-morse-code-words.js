/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let obj = {}
    let alp = "abcdefghijklmnopqrstuvwxyz"
    let code = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    for(let word of words){
        let tem = ""
        for(let i of word){
            for(let j=0;j<alp.length;j++){
                if(i === alp[j]){
                    tem+=code[j]
                    break
                }
            }
        }
        if(!obj[tem]){
            obj[tem] = true
        }
    }
    return Object.keys(obj).length
};