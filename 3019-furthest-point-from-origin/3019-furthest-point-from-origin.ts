function furthestDistanceFromOrigin(moves: string): number {
    let L = 0
    let R = 0
    let _ = 0
    for(let i=0;i<moves.length;i++){
        if(moves[i]=="L"){
            L++
        } else if (moves[i]=="R"){
            R++
        } else {
            _++
        }
    }
    if(L>R){
        return L-R+_
    } else {
        return R-L+_
    }
};