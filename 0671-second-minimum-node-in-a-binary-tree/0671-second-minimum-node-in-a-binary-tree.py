# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findSecondMinimumValue(self, root: Optional[TreeNode]) -> int:
        min_val = root.val
        second_min = float('inf')

        def dfs(node):
            nonlocal second_min
            if not node:
                return
            if min_val < node.val < second_min:
                second_min = node.val
            dfs(node.left)
            dfs(node.right)

        dfs(root)
        return -1 if second_min == float('inf') else second_min