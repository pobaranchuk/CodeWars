function XO(str) {
    let xCount = 0
    let oCount = 0
    debugger
    for (const i of str.toLowerCase()) {
        if(i === "x"){
            xCount++
        }
        if(i === "o"){
            oCount++
        }
    }
    return xCount === oCount
}
console.log(XO("zpzpzpp"))
