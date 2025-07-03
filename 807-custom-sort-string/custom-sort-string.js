/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let obj = {}
    for(let i of s){
        if(obj[i]){
            obj[i]++
        } else {
            obj[i]=1
        }
    }
    let ans = ""
    for(let i of order){
        if(obj[i]){
            for(let j=0;j<obj[i];j++){
                ans+=i
            }
            delete obj[i]
        }
    }
    for(let i in obj){
        for(let j=0;j<obj[i];j++){
            ans+=[i]
        }
    }
    return ans
};