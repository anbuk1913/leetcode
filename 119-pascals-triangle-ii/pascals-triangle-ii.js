/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let arr = [[1],[1,1]]
    for(let i=2;i<=rowIndex;i++){
        let tem = [1]
        for(let j=1;j<i;j++){
            tem.push(arr[arr.length-1][j]+arr[arr.length-1][j-1])
        }
        tem.push(1)
        arr.push(tem)
    }
    return arr[rowIndex]
};