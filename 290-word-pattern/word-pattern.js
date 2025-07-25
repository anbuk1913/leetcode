/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    s=s.split(" ")
    if(s.length!=pattern.length){
        return false
    }
    let myMap = new Map()
    for(let i=0;i<pattern.length;i++){
        if(myMap.has(pattern[i])){
            if(myMap.get(pattern[i]) == s[i]){
                continue
            } else {
                return false
            }
        } else {
            let arr = []
            for(let k of myMap.values()){
                arr.push(k)
            }
            if(arr.includes(s[i])){
                return false
            }
            myMap.set(pattern[i],s[i])
        }
    }
    return true
};