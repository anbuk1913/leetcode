/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
    let tem = ""
    let count = 0
    let words = []
    for(let i of text){
        if(i === " "){
            count++
            if(tem){
                words.push(tem)
            }
            tem = ""
        } else {
            tem+=i
        }
    }
    if(tem){
        words.push(tem)
    }
    let ans = ""
    for(let i=0;i<words.length;i++){
        ans+=words[i]
        if(i==words.length-1)break
        let tem1 = Math.floor(count/(words.length-1))
        for(let j=0;j<tem1;j++){
            ans+=" "
        }
    }
    for(let i=0;i<count%(words.length-1);i++){
        ans+=" "
    }
    if(words.length===1){
        for(let i=0;i<count;i++){
            ans+=" "
        }
    }
    return ans
};