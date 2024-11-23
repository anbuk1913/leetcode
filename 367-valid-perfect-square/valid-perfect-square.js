/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let q = Math.floor(num / 4);
    let i = 1;
    while (i <= q + 1) {
        if (i * i == num) {
            return true;
        }
        else {
            i++;
        }
    }
    return false;
};