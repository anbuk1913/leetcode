class Solution:
    def hasSameDigits(self, s: str) -> bool:
        while len(s)!=2:
            tem = ""
            for i in range (1, len(s)):
                tem+=str((int(s[i-1])+int(s[i]))%10)
            s = tem
        return s[0]==s[1]
        