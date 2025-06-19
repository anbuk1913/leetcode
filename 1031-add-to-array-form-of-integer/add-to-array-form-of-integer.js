/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    k = String(k).split("").reverse()
    k = k.map((a)=>Number(a))
    num.reverse()
    let carry = 0
    let i = 0
    let ans = []
    while(i<num.length || i<k.length){
        if(i<num.length && i<k.length){
            if(num[i]+k[i]+carry>9){
                let tem = num[i]+k[i]+carry
                tem = String(tem).split("")
                tem = tem.map((a)=>Number(a))
                ans.push(tem[1])
                carry = 1
            } else {
                ans.push(num[i]+k[i]+carry)
                carry = 0
            }
        }
        else if(i<num.length){
            if(num[i]+carry>9){
                let tem = num[i]+carry
                tem = String(tem).split("")
                tem = tem.map((a)=>Number(a))
                ans.push(tem[1])
                carry = 1
            } else {
                ans.push(num[i]+carry)
                carry = 0
            }
        } else {
            if(k[i]+carry>9){
                let tem = k[i]+carry
                tem = String(tem).split("")
                tem = tem.map((a)=>Number(a))
                ans.push(tem[1])
                carry = 1
            } else {
                ans.push(k[i]+carry)
                carry = 0
            }
        }
        i++
    }
    if(carry){
        ans.push(carry)
    }
    return ans.reverse()
};