/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let str = ""
    let rev = s.split("").reverse("").join("")
    let tem=""
    let ans=""
    const alp = "QWERTYUIOPASDFTGYHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    for(let i=0;i<rev.length;i++){
        if(alp.includes(rev[i]))ans+=rev[i]
        else tem+=rev[i]
    }
    let n=0
    for(let i=0;i<s.length;i++){
        if(ans.includes(s[i]))str+=ans[n++]
        else str+=s[i]
    }
    return str  
};