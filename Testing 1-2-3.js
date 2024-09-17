//["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
var number=function(array){
    return array.map((el, index) => {
        return `${index + 1}: ${el}`
    })
}

console.log(number([]))