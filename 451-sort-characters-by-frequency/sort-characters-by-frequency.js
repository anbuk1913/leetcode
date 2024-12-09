/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const num = new Map();
    for (const char of s) {
        num.set(char, (num.get(char) || 0) + 1);
    }
    const arr = Array.from(num.entries());
    arr.sort((a, b) => b[1] - a[1]);
    let ans = '';
    for (const [l, c] of arr) {
        ans += l.repeat(c);
    }
    return ans;
};