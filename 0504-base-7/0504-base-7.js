/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    let ans = ""
    let neg = false
    if(!num){
        return "0"
    }
    if(num<0){
        num*=-1
        neg = true
    }
    while(num != 0){
        ans+= num%7
        num = Math.floor(num/7)
    }
    if(neg){
        ans+="-"
    }
    ans = ans.split("").reverse("").join("")
    return ans
};