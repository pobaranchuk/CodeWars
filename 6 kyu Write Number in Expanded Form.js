function expandedForm(num) {

    let expandedNumbers = []

    while (num > 0) {
        let orderOfMagnitude = 10 ** Math.floor(Math.log10(num))
        expandedNumbers.push(num - (num % orderOfMagnitude))
        num %= orderOfMagnitude;
    }
    return expandedNumbers.join(' + ')
}

//expandedForm(12); // Should return '10 + 2'
//expandedForm(42); // Should return '40 + 2'
console.log(expandedForm(42)); // Should return '70000 + 300 + 4'