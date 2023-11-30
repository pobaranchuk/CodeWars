function highestRank(arr) {
    const frequency = {};

    arr.forEach(el => {
        frequency[el] = (frequency[el] || 0) + 1
    })

    const finalObj = Object.entries(frequency).reduce(
        (result, [index, value]) => {
            if (!result?.value || result.value <= value) {
                result = {index, value}
            }
            return result;
        },
        {}
    )
    return Number(Object.values(finalObj)[0])
}
console.log(highestRank([12,10,8,12,7,6,4,10,12,10]))


//
//     [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
//     [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
//     [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3