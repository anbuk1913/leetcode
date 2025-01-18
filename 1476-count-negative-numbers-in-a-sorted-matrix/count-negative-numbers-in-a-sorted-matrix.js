/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count=0

    for(let i of grid){
        if(i[0]<0){
            for(let j=0;j<i.length;j++){
                if(i[j]<0)count++
                else break
            }
        }
        else if(i[i.length-1]<0){
            for(let j=i.length-1;j>=0;j--){
                if(i[j]<0)count++
                else break
            }
        }
    }
    return count
};