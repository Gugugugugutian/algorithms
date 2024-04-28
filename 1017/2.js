/**
 * @param {number} n
 * @return {string}
 */
var baseNeg2 = function(n) {
    // 把结果看作一个正数减去一个负数
    let ans = '0';
    if(n%2!==0) {
        ans = '1';
        n--;
    }
    // 计算那个正数
    let acc = 0;
    let exp4 = 1;
    while(acc<n) {
        acc += Math.pow(4, exp4);
        exp4++;
    }
    // 计算那个负数
    let diff = acc - n;

    // 去除个位（最低位）以后：
    // （1）如果acc[i]===0，这一位就是diff[i]。
    // （2）如果acc[i]===1，这一位是diff[i]取反。
    acc >>= 1;
    diff >>= 1;
    while(acc>0) {
        if(acc&1 === 1){
            ans = '' + (~diff&1) + ans;
        }
        else {
            ans = '' + (diff&1) + ans;
        }
        acc >>= 1;
        diff >>= 1;
    }
    return ans;
};