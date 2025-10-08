function myAtoi(s: string): number {
    // s=s.trim()
    // if(0<=Number(s[0])||s[0]=="+"||s[0]=="-"){
    //     let i:number = 0
    //     let sign:boolean = false
    //     if(s[0]=="+"||s[0]=="-"){
    //         i++
    //         sign = true
    //     }
    //     let tem:string = ""
    //     for(i;i<s.length;i++){
    //         if(String(Number(s[i]))!="NaN"){
    //             tem+=s[i]
    //         } else {
    //             break
    //         }
    //     }
    //     if(sign){
    //         if(s[0]=="-")
    //             return Number("-"+tem)
    //     }
    //     return Number(tem)
    // } else {
    //     return 0
    // }

    const min: number = -(2 ** 31)
    const max: number = 2 ** 31 - 1
    const ans: number = parseInt(s) || 0

    if (ans < min) return min
    if (ans > max) return max
    return ans
};