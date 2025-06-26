/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let ans = 0
    let left = 0
    let right = 0
    for(let i=0;i<s.length;i++){
        if(s[i]=="("){
            left++
        } else {
            right++
        }
        if(left == right){
            if(ans<right*2){
                ans = right*2
            }
        } else if (right>left){
            left = 0
            right = 0
        }
    }
    left = 0
    right = 0
    for(let i=s.length-1;i>=0;i--){
        if(s[i]=="("){
            left++
        } else {
            right++
        }
        if(left == right){
            if(ans<left*2){
                ans = left*2
            }
        } else if (right<left){
            left = 0
            right = 0
        }
    }
    return ans
};