/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let max = 1
    for(let i=0;i<fruits.length;i++){
        let arr = []
        arr.push(fruits[i])
        let len = 1
        for(let j=i+1;j<fruits.length;j++){
            if(arr.includes(fruits[j])){
                len++
            } else {
                if(arr.length<2){
                    len++
                    arr.push(fruits[j])
                } else {
                    break
                }
            }
        }
        if(max<len){
            max = len
        }
        if(max>fruits.length/2) break
    }
    return max
};