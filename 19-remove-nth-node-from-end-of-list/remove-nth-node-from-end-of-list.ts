/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let arr = []
    let tem = head
    while(tem){
        if(arr.length>n){
            arr.shift()
        }
        arr.push(tem)
        tem=tem.next
    }
    tem = arr[0]
    if(arr.length==n){
        return head.next
    }
    if(tem.next && tem.next.next){
        tem.next = tem.next.next
    } else {
        tem.next = null
    }
    return head
};