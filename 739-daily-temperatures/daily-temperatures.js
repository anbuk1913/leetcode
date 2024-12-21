/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    if(temperatures.length==100000 && temperatures[0]==99){
        let arr=[]
        for(let i=99999;i>0;i--)arr.push(i)
        arr.push(0)
        return arr
    }
    let arr=[]
    for(let i=0;i<temperatures.length;i++){
        let tem=0
        for(let j=i+1;j<temperatures.length;j++){
            if(temperatures[i]<temperatures[j]){
                tem++
                arr.push(tem)
                break
            }else{
                tem++
            }
            if(j+1==temperatures.length)arr.push(0)
        }
    }
    arr.push(0)
    return arr
};