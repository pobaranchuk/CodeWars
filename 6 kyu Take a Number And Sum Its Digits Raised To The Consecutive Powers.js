function sumDigPow(a, b) {

    let result = []
    let sumOfPowers  = 0

    for (let i = a; i <= b; i++) {
        //const sumOfPowers = Array.from(String(i), Number)
        //             .reduce((sum, digit, index) => sum + Math.pow(digit, index + 1), 0);

        let numbers = Array.from(String(i), Number)

        for (let k = 1; k <= numbers.length; k++) {
            sumOfPowers += Math.pow(numbers[k - 1], k)
        }

        if (sumOfPowers  === i) {
            result.push(i)
        }
        sumOfPowers = 0
    }
    return result
}

console.log(sumDigPow(88, 136))
//(10, 100),  [89])
//(90, 100), [])
//(90, 150), [135])
//(50, 150), [89, 135])
//(10, 150), [89, 135])