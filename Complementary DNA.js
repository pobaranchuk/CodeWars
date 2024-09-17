function dnaStrand(dnaString){

    const dnaMap = {
        "A": "T",
        "C": "G",
        "T": "A",
        "G": "C"
    }

    return dnaString
        .split("")
        .map(s => dnaMap[s])
        .join("")
}

console.log(dnaStrand("ATTGC"))

