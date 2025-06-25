/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    let obj = {}
    let max = 1
    function last(root){
        let a = String(root.val)
        console.log(a)
        if(obj[a]){
            obj[a]++
            if(max<obj[a]){
                max = obj[a]
            }
        } else {
            obj[a] = 1
        }
        if(root.left){
            last(root.left)
        }
        if(root.right){
            last(root.right)
        }
    }
    last(root)
    console.log(obj,max)
    let ans = []
    for(let i in obj){
        if(obj[i]==max){
            ans.push(Number(i))
        }
    }
    return ans
};