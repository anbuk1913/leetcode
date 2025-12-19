/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxSum = function(grid) {
    let ans = 0
    let arr = [[],0,[]]
    let rm = grid.length, cm = grid[0].length
    let i=0
    while(i+2<rm){
        let j = 2
        for(let k=0;k<2;k++){
            arr[0].push(grid[i][k])
            arr[2].push(grid[i+2][k])
        }
        while(j<cm){
            arr[0].push(grid[i][j])
            arr[1] = grid[i+1][j-1]
            arr[2].push(grid[i+2][j])
            let tem = 0
            for(let i of arr[0]){
                tem+=i
            }
            for(let i of arr[2]){
                tem+=i
            }
            tem+=arr[1]
            ans = Math.max(ans,tem)
            arr[0].shift()
            arr[2].shift()
            j++
        }
        for(let k=0;k<2;k++){
            arr[0].pop()
            arr[2].pop()
        }
        i++
    }
    return ans
};