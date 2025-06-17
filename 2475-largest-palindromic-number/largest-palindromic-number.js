/**
 * @param {string} num
 * @return {string}
 */
var largestPalindromic = function(num) {
    let obj = {}
    for(let i=0;i<num.length;i++){
        if(obj[num[i]]){
            obj[num[i]]++
        } else {
            obj[num[i]] = 1
        }
    }
    let str = ""
    let char = ""
    let x = false
    if(obj[0]){
        if(obj[0]%2){
            x = true
            for(let i=0;i<obj[0]-1;i++){
                str+="0"
            }
        } else {
            for(let i=0;i<obj[0];i++){
                str+="0"
            }
        }
    }
    for(let i in obj){
        if(obj[i]%2 && i!="0"){
            let tem = 1
            let count = obj[i]-1
            char = i
            for(let j=0;j<count;j++){
                if(tem%2){
                    str=str+i
                    tem++
                } else {
                    str=i+str
                    tem++
                }
            }
        } 
        else if(i!="0"){
            let tem=1
            for(let j=0;j<obj[i];j++){
                if(tem%2){
                    str=str+i
                    tem++
                } else {
                    str=i+str
                    tem++
                }
            }
        }
    }
    if(char.length==0 && x){
        char = "0"
    }
    if(Number(str)){
        str = str.split("")
        str.splice((str.length/2),0,char)
        return str.join("")
    } else {
        if(char.length){
            return char
        } else {
            return "0"
        }
    }
};