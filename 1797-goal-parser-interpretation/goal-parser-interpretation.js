/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let ans = ""
    for(let i=0;i<command.length;i++){
        if(command[i]==")"&&command[i-1]=="("){
            ans+="o"
        } else if(command[i]!="(" && command[i]!=")"){
            ans+=command[i]
        }
    }
    return ans
};