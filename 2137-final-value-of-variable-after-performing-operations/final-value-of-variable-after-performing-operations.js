/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let pos=0
    let neg=0
    for(let i of operations){
        if(i == "++X" || i == "X++")pos++
        else neg--
    }
    return neg+pos
};