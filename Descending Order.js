function descendingOrder(n){
    let number = Array.from(String(n), num => Number(num));
    number.sort((a, b) => b - a)
    let revertedNumber = number.toString().replaceAll(",","")
    return Number(revertedNumber)
}

let number = 1201;

descendingOrder(number)