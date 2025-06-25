/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function(word) {
    let obj = {}
    let max = 0
    for(let i of word){
        if(obj[i]){
            obj[i]++
            if(max<obj[i]){
                max = obj[i]
            }
        } else {
            obj[i] = 1
        }
    }
    if(!max){
        return true
    }
    let keys = []
    for(let i in obj){
        keys.push(Number(obj[i]))
    }
    keys.sort((a,b)=>a-b)
    let diff = 0
    for(let i=2;i<keys.length;i++){
        if(keys[i]!=keys[i-1]){
            if(keys[i]!=keys[i-2]){
                diff = i
            } else {
                diff = i-1
            }
            break
        }
        if(keys[i-1]!=keys[i-2]){
            if(keys[i-1]!=keys[i]){
                diff = i-1
            } else {
                diff = i-2
            }
            break
        }
    }
    console.log(keys)
    console.log(obj)
    console.log(diff)
    if(2<keys.length){
        keys[diff] = keys[diff]-1
    } else {
        if(keys[0]==1){
            keys[0] = keys[0]-1
        } else {
            keys[keys.length-1] = keys[keys.length-1]-1
        }
    }
    
    for(let i=1;i<keys.length;i++){
        if(keys[i]!=keys[i-1]&&keys[i]!=0&&keys[i-1]!=0){
            return false
        }
    }
    return true
};