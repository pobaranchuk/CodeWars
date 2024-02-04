function makeValley(arr) {
    let leftArr = []
    let rightArr = []

    arr.sort((a, b) => b - a)
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            leftArr.push(arr[i])
        } else {
            rightArr.push(arr[i])
        }
    }
    rightArr.reverse()
    return leftArr.concat(rightArr)
}

a = [67, 93, 100, -16, 65, 97, 92]

console.log(makeValley(a))