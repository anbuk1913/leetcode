/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let curr = head
    if(!head){
        return head
    }
    while(curr.next){
        if(curr.val == curr.next.val){
            if(curr.next.next){
                curr.next = curr.next.next
                continue
            } else {
                curr.next = null
                break
            }
        }
        curr = curr.next
    }
    return head
};