/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let ans=0
    for(let i=0;i<arr.length;i++){
        if((i+1)%2==1){
            for(let j=0;j<arr.length;j++){
                let state = false
                for(let k=0;k<i+1;k++){
                    ans+=arr[j+k]
                    if(j+k == arr.length-1)state=true
                }
                if(state)break
            }
        }
    }
    return ans
};