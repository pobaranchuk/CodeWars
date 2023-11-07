function solve(array) {
    let reversedArray = array.reverse().filter((item, index) =>  array.indexOf(item)  === index)
    return reversedArray.reverse()
}

let myArray = [3, 4, 4, 3, 6, 3];

console.log(solve(myArray))