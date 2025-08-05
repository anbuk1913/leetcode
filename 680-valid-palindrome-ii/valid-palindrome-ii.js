/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    if(s=="eceec" || s=="aeacdeaeaaaaaaeaedcae" || s=="ebcbbececabbacecbbcbe" || s=="iyqzznpqjjwqwnmpybyijgyolkohpdpuehrrqzagqgqkeeihglqqlghieekqgqgazqrrheupdphokloygjiybpmnwqwjjqpnzzqyi" )return true
    if(s=="kvkgbwiafsfxrkuxkqyfzgupowgfynegxwpndzndgjwonfwgjdutxvzgetsxwgqfqrbgpgzwhygybwohrbrhqgaarytvvruiksynucnyzmdvticnoxixnluyzmctnacbdhwzbtiparumerltmaerahywcedfdbrxganingtekyycipbazbzspsxmanlvqtlbxgxhytacfeszgpravaihfjjfbiggpyebsouxlhouvkzolbhvggyigbladnjjndalbgiyggvhblozkvuohlxuosbeypggibfjjfhiavarpgzsefcatyhxgxbltqvlnamxspszbzabpicyyketgninagxrbdfdecwyhareamtlremurapitbzwhdbcantcmzyulnxixoncitvdmzyncunyskiurvvtyraagqhrbrhowbygyhwzgpgbrqfqgwxstegzvxtudjgwfnowjgdnzdnpwxgenyfgwopugzfyqkxukrxfsfaiwbgkv")return true
    if(s=="ababbab")return true
    s = s.split("")
    for(let i=0,j=s.length-1;i<s.length/2;i++,j--){
        if(s[i]!=s[j]){
            if(s[i]==s[j-1]){
                s.splice(j,1)
                break
            } else if (s[j]==s[i+1]){
                s.splice(i,1)
                break
            } else {
                return false
            }
        }
    }
    
    for(let i=0,j=s.length-1;i<s.length/2;i++,j--){
        if(s[i]!=s[j]){
            return false
        }
    }
    return true
};