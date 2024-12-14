/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let y=0
let x=0
let arr=[[0,0]]
for(let i=0;i<path.length;i++){
    if(path[i]=="N")y++
    else if(path[i]=="S")y--
    else if(path[i]=="E")x++
    else if(path[i]=="W")x--
    arr.push([x,y])
}
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i][0]==arr[j][0] && arr[i][1]==arr[j][1])
            return true
    }
}
return false
};