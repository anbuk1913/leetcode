/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows===1||s.length <3)return s
    let arr = new Array(numRows).fill("");
    let track = false
    let tem = 0
    for(let char of s) {
        arr[tem] += char
        if(tem ===0 || tem === numRows-1) {
         track = !track
        }
        tem += track ? 1 : -1
    }
    return arr.join('')
};