function spinWords(string) {
    let modified = ""
    for (let subStr of string.split(" ")) {
        if (subStr.length >= 5) {
            modified += subStr.split("").reverse().join("") + " "
        }else{
            modified += subStr + " "
        }
    }
    return modified.trim()
}
console.log(spinWords("Welcome"))