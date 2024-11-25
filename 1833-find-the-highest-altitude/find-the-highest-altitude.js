/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let arr=[0]
    for(let i=0;i<gain.length;i++){
        arr.push((arr[i])+(gain[i]))
    }
    const max=arr.reduce((acc,val)=>{
        if(acc<val) return val
        else return acc
    })
    return max
};