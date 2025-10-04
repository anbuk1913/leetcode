function maxArea(height: number[]): number {
    let left = 0
    let right = height.length-1
    let ans = 0
    while(left < right){
        const width = right-left
        const minHeight = Math.min(height[left],height[right])
        const area = width * minHeight
        ans = Math.max(ans, area)
        if(height[left] < height[right]){
            left++
        } else {
            right--
        }
    }
    return ans
};