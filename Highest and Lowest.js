function highAndLow(numbers){
    let temp = numbers.split(" ").sort((a, b) => b - a)
    return [temp[0], temp[temp.length - 1]].join(" ")
}

console.log(highAndLow("1 2 -3 4 5"))
