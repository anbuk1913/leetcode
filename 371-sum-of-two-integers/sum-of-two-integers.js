/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    if(a>b){
        while(b!=0){
            if(b>0){
                b--
                a++
            } else {
                b++
                a--
            }
        }
        return a
    } else {
        while(a!=0){
            if(a>0){
                a--
                b++
            } else {
                a++
                b--
            }
        }
        return b
    }
};