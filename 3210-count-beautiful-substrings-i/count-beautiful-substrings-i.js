/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var beautifulSubstrings = function(s, k) {
    let vow = "aeiou"
    let ans = 0
    for(let i=0;i<s.length;i++){
        let str = s[i]
        let vc = 0
        let cc = 0
        if(vow.includes(s[i])){
            vc++
        } else {
            cc++
        }
        for(let j=i+1;j<s.length;j++){
            if(vow.includes(s[j])){
                vc++
            } else {
                cc++
            }
            if(vc===cc && (vc*cc)%k==0){
                ans++
            }
        }
    }
    return ans
};