class Solution(object):
    def selfDividingNumbers(self, left, right):
        """
        :type left: int
        :type right: int
        :rtype: List[int]
        """
        ans = []
        for i in range(left,right+1):
            if i<10:
                ans.append(i)
            elif i%10==0:
                continue
            else:
                tem=str(i)
                tem2=True
                for ch in tem:
                    if int(ch)==0:
                        tem2 = False
                        break
                    elif i%int(ch)!=0:
                        tem2 = False
                        break
                if tem2:
                    ans.append(i)
        return ans
        