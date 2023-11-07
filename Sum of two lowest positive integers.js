function sumTwoSmallestNumbers(numbers) {
    debugger
    let [a, b] = numbers.sort((a, b) => (a - b))
    return a + b
}

let numbers = [1, 10, 3, 12, 45]
console.log(sumTwoSmallestNumbers(numbers))