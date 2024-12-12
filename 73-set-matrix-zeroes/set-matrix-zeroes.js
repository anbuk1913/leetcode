/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let arr1=[]
    let arr2=[]
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j]==0){
                arr1.push(i)
                arr2.push(j)
            }
        }
    }

    for(let i=0;i<matrix.length;i++){
        if(arr1.includes(i)){
            for(let j=0;j<matrix[i].length;j++)matrix[i][j]=0
        } else {
            for(let j=0;j<matrix[i].length;j++){
                if(arr2.includes(j))matrix[i][j]=0
            }
        }
    }
    return matrix
};