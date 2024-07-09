//input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
function openOrSenior(data) {
    let result = []
    for (const member of data) {
        if (member[0] > 55 && member[1] > 7) {
            result.push("Senior")
        } else {
            result.push("Open")
        }
    }
    return result
}

console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))