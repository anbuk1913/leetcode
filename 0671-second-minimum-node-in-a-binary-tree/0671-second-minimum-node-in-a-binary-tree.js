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
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
    let min = root.val
    let secondMin = Infinity
    function dfs(node) {
        if(!node) return
        if(node.val>min&&node.val<secondMin){
            secondMin = node.val
        }
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    if(secondMin==Infinity){
        return -1
    } else {
        return secondMin
    }
};
