// var maxSequence = function (arr) {
//     let currentSun = 0
//     let maxSum = 0
//     for (let i = 0; i < arr.length; i++) {
//         currentSun = Math.max(0, currentSun + arr[i])
//         maxSum = Math.max(maxSum, currentSun)
//     }
//     return maxSum
// }

var maxSequence = function(arr){
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j <= arr.length; j++) {
            const subArray = arr.slice(i, j)
            const subArraySum = subArray.reduce((acc, currentValue) => acc + currentValue,0,)
            if(sum < subArraySum) sum = subArraySum
        }
    }
    return sum
}

console.log(maxSequence([7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43]))
//155
//[29,-37,4,35,-21,34,-40,7,-47,-26,-8,-22,-13,1,14,3,24,-28,5,28,27]: expected 52 to equal 74