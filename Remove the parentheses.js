function removeParentheses(s) {
    let switchCounter = 0
    let modified = "";
    for (let char of s) {
        debugger
        if (char === "(") {
            switchCounter ++
            continue
        }
        if (char === ")") {
            switchCounter --
            continue
        }
        if (!switchCounter){
            modified += char
        }
    }
    return modified;
}

console.log(removeParentheses("Hello (a(b)c) world"))