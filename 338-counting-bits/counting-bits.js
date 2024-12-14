/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let arr=[]
    for(let i=0;i<=n;i++){
        let bi = i.toString(2)
        let count=0
        let str = String(bi)
            for(let j=0;j<str.length;j++){
                if(str[j]=="1")count++
            }
        arr.push(count)
    }
    return arr
};