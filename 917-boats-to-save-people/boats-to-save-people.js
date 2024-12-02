/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let count=0
    people.sort((a,b)=>a-b)
    for(let i=people.length-1,j=0;i>=j;i--){
        if(people[i]+people[j]<=limit){
            count++
            j++
        } else{
            count++
        }
    }
    return count
};