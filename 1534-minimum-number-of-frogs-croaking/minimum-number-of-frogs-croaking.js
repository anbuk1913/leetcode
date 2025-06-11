/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function(croakOfFrogs) {
    let c=0
    let r=0
    let o=0
    let a=0
    let k=0
    for(let croakOfFrog of croakOfFrogs){
        if(croakOfFrog =='c') c++
        else if(croakOfFrog =='r') r++
        else if(croakOfFrog =='o') o++
        else if(croakOfFrog =='a') a++
        else if(croakOfFrog =='k') k++
        if(c<r || r<o || o<a || a<k) return -1
    }
    if(c !== r || r!== o || o!== a || a!==k) return -1
    let temp_c =0
    let max_c =0
    for(let croakOfFrog of croakOfFrogs){
        if(croakOfFrog =='c') {
           temp_c++ 
           max_c = Math.max(temp_c, max_c)
        }
        if(croakOfFrog =='k'){
            temp_c--
        }
    }
    return max_c
};