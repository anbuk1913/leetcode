/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
    let arr = []
    let curr = head
    while(curr.next){
        let tem = curr.next
        while(curr?.val>=tem?.val){
            tem = tem.next
        }
        if(tem?.val){
            arr.push(tem.val)
        } else {
            arr.push(0)
        }
        curr = curr.next
    }
    arr.push(0)
    return arr 
};