//Example #2: An input of 765 will/should
// return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)


function squareDigits(num) {
    let newNumber = ""
    for (const numKey of [...num.toString()].map(Number)) {
        newNumber += numKey*numKey
    }
    return Number(newNumber)
}

squareDigits(2112)