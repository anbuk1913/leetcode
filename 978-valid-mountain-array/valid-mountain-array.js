/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if(arr.length<3)return false
    let st = 1
    let en = arr.length-2

    for(let i=1;i<arr.length;i++){
        if(arr[i]-arr[i-1]<=0){
            st = i-1
            break
        }
    }
    for(let i=arr.length-2;i>=0;i--){
        if(arr[i]-arr[i+1]<=0){
            en = i+1
            break
        }
    }
    if(st===en){
        return true
    } else {
        return false
    }
};