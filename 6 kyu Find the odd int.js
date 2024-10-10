function findOdd(A) {
    let obj = {}
    for (const num of A) {
        obj[num] = (obj[num] || 0) + 1
    }
    return Number(Object.keys(obj).find(key => obj[key] % 2 !== 0))
}

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))


//[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time