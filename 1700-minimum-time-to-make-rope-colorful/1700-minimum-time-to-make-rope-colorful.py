class Solution:
    def minCost(self, colors: str, neededTime: List[int]) -> int:
        ans = 0
        colors = list(colors)
        print(colors)
        i = 1
        ans = 0
        while i < len(colors):
            if colors[i] == colors[i-1]:
                if neededTime[i] < neededTime[i-1]:
                    ans += neededTime[i]
                    colors.pop(i)
                    neededTime.pop(i)
                else:
                    ans += neededTime[i-1]
                    colors.pop(i-1)
                    neededTime.pop(i-1)
            else:
                i += 1
        return ans