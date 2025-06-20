/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    for(let i=0;i<words.length;i++){
        words[i] = words[i].split(separator)
    }
    words = words.flat(1)
    for(let i=0;i<words.length;i++){
        if(!words[i]){
            words.splice(i,1)
            i--
        }
    }
    return words
};