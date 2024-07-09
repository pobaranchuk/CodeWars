let a = [121, 144, 19, 161, 19, 144, 19, 11]
let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

function comp(array1, array2) {
    if(!array1 || !array2){
        return false
    }
    array1.sort()
    let newArray2 = array2.map(a => Math.sqrt(a)).sort()
    return array1.every((value, index) => value === newArray2[index])
}

console.log(comp(a, b))