/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    let max = []
    for(let i of nums){
        let tem = 0
        for(let j=0;j<String(i).length;j++){
            if(tem<Number(String(i)[j])){
                tem = Number(String(i)[j])
            }
        }
        max.push(tem)
    }
    let obj = {}
    for(let i=0;i<max.length;i++){
        if(obj[max[i]]){
            obj[max[i]].push(nums[i])
        } else {
            obj[max[i]] = [nums[i]]
        }
    }
    let maxNum = -1
    
    let f = -Infinity
    let s = -Infinity

    for(let i in obj){
        if(obj[i].length>1){
            for(let j=0;j<obj[i].length;j++){
                if(f<obj[i][j]){
                    s = f
                    f = obj[i][j]
                } else if(s<obj[i][j]){
                    s = obj[i][j]
                }
            }
            if(maxNum<f+s){
                maxNum = f+s
            }
            f = -Infinity
            s = -Infinity
        }
    }
    return maxNum
};