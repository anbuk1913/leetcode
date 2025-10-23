/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
    do {
        let tem = ""
        for(let i=1;i<s.length;i++){
            tem+=String((Number(s[i-1])+Number(s[i]))%10)
        }
        s = tem
    } while(s.length!=2)
    return s[0]===s[1]
};