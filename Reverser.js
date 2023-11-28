function reverse(n) {
    let arr = [];
    while (n > 0) {
        arr.unshift(n % 10);
        console.log(n)
        n = n / 10 | 0;
    }
    return  arr.reverse().map(Number).reduce((accum, digit) => (accum * 10) + digit, 0)
}

console.log(reverse(123)) 