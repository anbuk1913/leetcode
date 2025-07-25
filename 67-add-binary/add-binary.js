/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let carry = 0
    let start = 0
    a = a.split("").reverse("").join("")
    b = b.split("").reverse("").join("")
    let ans = ""
    while(start<a.length && start<b.length){
        let n1 = Number(a[start])
        let n2 = Number(b[start])
        let sum = n1+n2+carry
        if(sum<2){
            ans=sum+ans
            carry = 0
        } else if(sum>2){
            ans="1"+ans
            carry = 1
        }
         else {
            ans="0"+ans
            carry = 1
        }
        start++
    }
    console.log(ans,start)
    while(start<a.length){
        let tem = Number(a[start])
        let sum = tem+carry
        if(sum<2){
            ans=sum+ans
            carry = 0
        } else if(sum>2){
            ans="1"+ans
            carry = 1
        }
         else {
            ans="0"+ans
            carry = 1
        }
        start++
    }
    while(start<b.length){
        let tem = Number(b[start])
        let sum = tem+carry
        if(sum<2){
            ans=sum+ans
            carry = 0
        } else if(sum>2){
            ans="1"+ans
            carry = 1
        }
         else {
            ans="0"+ans
            carry = 1
        }
        start++
    }
    if(carry){
        ans = "1"+ans
    }
    return ans
};