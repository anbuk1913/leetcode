/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
let lcount = 0
let acount = 0
let max=0
for(let i=0;i<s.length;i++){
    
    if(s[i]=="A"){
        acount+=1
        lcount=0
    }
    else if(s[i]=="L"){
        lcount+=1
    } else {
        lcount=0
    }
    if(max<lcount){
        max=lcount
    }
}
if(max>=3 || acount>=2)return false
else return true
};