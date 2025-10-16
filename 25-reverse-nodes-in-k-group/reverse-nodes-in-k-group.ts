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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if(k<2){
        return head
    }
    let node = head
    let arr = []
    let tem = false
    let ans = new ListNode(-1)
    let temAns = ans
    while(node){
        for(let i=0;i<k;i++){
            if(node){
                arr.push(node.val)
                node = node.next
            } else {
                break
            }
        }
        if(arr.length == k){
            while(arr.length){
                if(!tem){
                    temAns.val = arr.pop()
                    tem = true
                } else {
                    let temNode = new ListNode(arr.pop())
                    temAns.next = temNode
                    temAns = temAns.next
                }
            }
        } else {
            for(let i=0;i<arr.length;i++){
                let temNode = new ListNode(arr[i])
                temAns.next = temNode
                temAns = temAns.next
            }
        }
    }
    return ans
};
