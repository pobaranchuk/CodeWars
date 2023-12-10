function proofread (str) {
    let intermediateString = str.toLowerCase().replaceAll("ie", "ei")
    let finalString = ""
    for (const i of intermediateString.split(". ")) {
        finalString += i.charAt(0).toUpperCase() + i.slice(1) + ". "
    }
    return finalString.slice(0, finalString.length - 2)
}
console.log(proofread("ThiEr DEcIEt wAs INconcIEVablE. sHe SIeZeD thE moMENT."))