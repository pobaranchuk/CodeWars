
function divCon(x){
    strX = x.filter(i => typeof i === "string")
    numX = x.filter(i => typeof i === "number")
    return numX.reduce((a, b) => a + b, 0) - strX.reduce((a, b)=>Number(a) + Number(b), 0)
}
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]));