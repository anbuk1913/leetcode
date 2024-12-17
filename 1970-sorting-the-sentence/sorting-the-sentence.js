/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    s=s.split(" ")
    for(let i=0;i<s.length;i++){
        for(let j=i+1;j<s.length;j++){
            if(s[i][s[i].length-1]>s[j][s[j].length-1]){
                let t=s[i]
                s[i] = s[j]
                s[j]= t
            }
        }
    }

    s=s.map((v)=>{
        return v.slice(0,v.length-1)
    })

    return s.join(" ")
};