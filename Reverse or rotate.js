function rotateString(str, positions) {
    positions = positions % str.length;
    return str.substring(positions) + str.substring(0, positions);
}

function revrot(str, sz) {
    if (sz <= 0 || str === "" || sz > str.length) {
        return ""
    }
    function myReducer(str, sz, resultArray = []) {
        let subStr = str.substring(0, sz)
        let subStrToArray = subStr.split("").map(Number)

        let sum = 0
        subStrToArray.forEach(x => sum += Math.pow(x, 3))

        let normalChunk = subStrToArray.toString().split(",").join("")

        let rotatedChunk = rotateString(normalChunk, 1)
        let reversedChunk = subStrToArray.reverse().toString().split(",").join("")

        let reducedStr = str.replace(normalChunk, "")

        resultArray.push(sum % 2 === 0 ? reversedChunk : rotatedChunk)

        if (reducedStr.length < sz) {
            return resultArray
        }
        return myReducer(reducedStr, sz, resultArray)
    }

    return myReducer(str, sz).join("")
}

console.log(revrot("123456779", 0))