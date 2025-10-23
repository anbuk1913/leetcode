function hasSameDigits(s: string): boolean {
    do {
        let tem:string = ""
        for(let i=1;i<s.length;i++){
            tem+=String((Number(s[i-1])+Number(s[i]))%10)
        }
        s = tem
    }while(s.length!=2)
    return s[0]==s[1]
};