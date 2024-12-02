/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let count=0
    people.sort((a,b)=>a-b)
    let t=people.length-1
    for(let i=t,j=0;i>=j;i--){
        if(people[i]+people[j]<=limit){
            count++
            t--
            j++
        } else{
            count++
        }
    }
    return count
};