class Solution:
    def prefixesDivBy5(self, nums: List[int]) -> List[bool]:
        ans = []
        tem = ""
        for i in nums:
            tem+=str(i)
            decimal = int(tem,2)
            if int(decimal)%5==0:
                ans.append(True)
            else:
                ans.append(False)
        return ans