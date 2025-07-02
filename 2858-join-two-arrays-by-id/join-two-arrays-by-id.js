/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    for(let i=1;i<arr1.length;i++){
        let curr = arr1[i]
        let j = i-1
        while( j>=0 && arr1[j].id>curr.id){
            arr1[j+1] = arr1[j--]
        }
        arr1[j+1] = curr
    }
    for(let i=1;i<arr2.length;i++){
        let curr = arr2[i]
        let j = i-1
        while( j>=0 && arr2[j].id>curr.id){
            arr2[j+1] = arr2[j--]
        }
        arr2[j+1] = curr
    }
    
    let ans = []
    
    let tem1 = 0
    let tem2 = 0

    while(tem1<arr1.length && tem2<arr2.length){
        if(arr1[tem1].id < arr2[tem2].id){
            ans.push(arr1[tem1++])
        } else if(arr1[tem1].id > arr2[tem2].id){
            ans.push(arr2[tem2++])
        } else {
            let tem = arr1[tem1]
            for(let i in arr2[tem2]){
                tem[i] = arr2[tem2][i]
            }
            ans.push(tem)
            tem1++
            tem2++
        }
    }
    while(tem1<arr1.length){
        ans.push(arr1[tem1++])
    }
    while(tem2<arr2.length){
        ans.push(arr2[tem2++])
    }
    return ans
};