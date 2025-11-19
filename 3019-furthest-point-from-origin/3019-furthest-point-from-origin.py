class Solution:
    def furthestDistanceFromOrigin(self, moves: str) -> int:
        L = 0
        R = 0
        _ = 0

        for ch in moves:
            if ch=="L":
                L+=1
            elif ch=="R":
                R+=1
            else:
                _+=1

        if L>R:
            return L-R+_
        else:
            return R-L+_