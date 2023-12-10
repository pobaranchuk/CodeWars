function whatCentury(year) {
    let century = Math.ceil(year / 100)
    if (century === 11 || century === 12 || century === 13) {
        return century + "th"
    }
    switch (century % 10) {
        case 1 :
            return century + "st"
        case 2 :
            return century + "nd"
        case 3:
            return century + "rd"
        default: {
            return century + "th"
        }
    }
}
console.log(whatCentury("2011"))