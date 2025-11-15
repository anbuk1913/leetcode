function selfDividingNumbers(left: number, right: number): number[] {
    let ans = []
    for(let i=left;i<=right;i++){
        if(i<10){
            ans.push(i)
        } else if(i%10==0){
            continue
        } else {
            let tem = String(i)
            let tem2 = true
            for(let j=0;j<tem.length;j++){
                let t = Number(tem[j])
                if(tem[j]=="0" || i%t!=0){
                    tem2 = false
                    break
                }
            }
            if(tem2){
                ans.push(i)
            }
        }
    }
    return ans
};