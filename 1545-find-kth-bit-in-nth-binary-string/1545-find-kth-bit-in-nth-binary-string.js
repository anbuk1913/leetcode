/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
    const invert = (bit) => bit === '0' ? '1' : '0'
    const findBit=(n,k)=>{
        if(n === 1) return '0';
        const length = (1<<n)-1
        const mid = Math.floor(length/2)+1
        if(k === mid) return '1'
        if(k<mid){
            return findBit(n - 1, k)
        } else {
            const mirroredIndex = length - k + 1
            return invert(findBit(n - 1, mirroredIndex))
        }
    };
    
    return findBit(n, k);
};