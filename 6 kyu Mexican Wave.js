function wave(str) {
    let result = []
    let cleanStr = str.toLowerCase()

    for (let i = 0; i < cleanStr.length; i++) {
        if(cleanStr[i] === ' ') continue
        else{
            result.push([...cleanStr].map((char, index) => index === i ? char.toUpperCase() : char ).join(''))
        }
    }
    return result
}

console.log(wave("Two words"))

//result = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];