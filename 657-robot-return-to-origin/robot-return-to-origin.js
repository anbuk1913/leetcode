/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {

let rCount=0
let lCount=0
let uCount=0
let dCount=0

for(let i=0;i<moves.length;i++){
    if(moves[i]=="R")rCount++
    else if(moves[i]=="L")lCount++
    else if(moves[i]=="U")uCount++
    else if(moves[i]=="D")dCount++    
}

if(lCount==rCount && dCount==uCount) return true
else return false
};