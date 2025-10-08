function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    let ans:number[] = []
    potions.sort((a,b)=>a-b)
    for(let spell of spells){
        let left=0,right=potions.length-1
        while(left<=right){
            let mid = Math.floor((left+right)/2)
            if(spell*potions[mid]>=success){
                right=mid-1
            } else {
                left=mid+1
            }
        }
        ans.push(potions.length-left)
    }
    return ans
};