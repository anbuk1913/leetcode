class Solution:
    def convertToBase7(self, num: int) -> str:
        if num == 0:
            return "0"
        ans = "" 
        neg = False
        if(num<0): 
            num*=-1
            neg = True
        while num != 0:
            ans = ans + str(num%7)
            num = num//7
        if(neg):
            ans= ans + "-"
        num = list(ans)
        num.reverse()
        res = "".join(num)
        return res