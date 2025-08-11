/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1)return s
    let arr = Array.from({length:numRows},()=>[])
    arr[0][0] = s[0]
    let track = true
    let tem = 1
    for(let i=1;i<s.length;i++){
        if(track){
            if(tem+1<numRows){
                arr[tem++].push(s[i])
            } else {
                track = false
                arr[tem--].push(s[i])
            }
        } else {
            if(tem>0){
                arr[tem--].push(s[i])
            } else {
                track = true
                arr[tem++].push(s[i])
            }
        }
    }
    let ans = ""
    for(let i of arr){
        for(let j of i){
            ans+=j
        }
    }
    return ans
};