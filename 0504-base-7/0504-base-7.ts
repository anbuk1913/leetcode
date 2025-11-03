function convertToBase7(num: number): string {
    let ans = []
    let neg = false
    if(!num){
        return "0"
    }
    if(num<0){
        num*=-1
        neg = true
    }
    while(num != 0){
        ans.push(String(num%7))
        num = Math.floor(num/7)
    }
    if(neg){
        ans.push("-")
    }
    ans = ans.reverse()
    return ans.join("")
};