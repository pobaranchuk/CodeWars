//"camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    let stringArr = string.split('')
    debugger
    for (let i = 0; i < stringArr.length; i++ ) {
        if(stringArr[i].toUpperCase() === stringArr[i]){
            stringArr.splice(i, 0, ' ')
            i++
        }
    }
    return stringArr.join('')
}

console.log(solution("timeTimeBadBadSeeFeelCompanyFirstSeeGreatSmallChildWeek"))