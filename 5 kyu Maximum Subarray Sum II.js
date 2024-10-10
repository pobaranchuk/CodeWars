// var maxSequence = function (arr) {
//     let currentSun = 0
//     let maxSum = 0
//     for (let i = 0; i < arr.length; i++) {
//         currentSun = Math.max(0, currentSun + arr[i])
//         maxSum = Math.max(maxSum, currentSun)
//     }
//     return maxSum
// }

function findSubarrMaxSum(arr){
    let sum = 0
    let tempArray = []
    let finalArray = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j <= arr.length; j++) {
            const subArray = arr.slice(i, j)
            const subArraySum = subArray.reduce((acc, currentValue) => acc + currentValue,0)

            if(sum < subArraySum){
                sum = subArraySum
                tempArray = [subArray]
            } else if(sum === subArraySum){
                tempArray.push(subArray)
            }
        }
    }

    if (tempArray.length === 1) {
        finalArray.push(tempArray[0], sum);
    } else {
        finalArray.push(tempArray, sum);  // Несколько подмассивов остаются вложенными
    }

    return finalArray;

}

console.log(findSubarrMaxSum([4, -1, 2, 1, -40, 1, 2, -1, 4]))
//[4, -1, 2, 1, -40, 1, 2, -1, 4]) returns [[[4, -1, 2, 1], [1, 2, -1, 4]], 6]  # From left to right [4, -1, 2, 1] appears in the array before than [1, 2, -1, 4].