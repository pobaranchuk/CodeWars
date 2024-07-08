function toJadenCase(str) {
    return str.split(' ').map((a) => {
        return a[0].toUpperCase() + a.slice(1)
    }).join(' ')
}

console.log(toJadenCase("How can mirrors be real if our eyes aren't real"))