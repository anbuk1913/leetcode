/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
    let filled = []
    let res = 0
    for(let i of fruits){
        let tem = true
        for(let j=0;j<baskets.length;j++){
            if(i<=baskets[j] && !filled.includes(j)){
                filled.push(j)
                tem = false
                break
            }
        }
        if(tem){
            res++
        }
    }
    return res
};