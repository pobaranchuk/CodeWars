//return the total number of smiling faces in the array
function countSmileys(arr) {
    let count = 0;
    for (const arrElement of arr) {
        for (let i = 0; i < arrElement.length; i++) {
            if (arrElement.length === 2) {
                if (arrElement[0] === ':' || arrElement[0] === ';') {
                    if (arrElement[1] === ')' || arrElement[1] === 'D') {
                        count++
                        break
                    }
                }
            }
            if (arrElement.length === 3) {
                if (arrElement[0] === ':' || arrElement[0] === ';') {
                    if (arrElement[1] === '-' || arrElement[1] === '~') {
                        if (arrElement[2] === ')' || arrElement[2] === 'D') {
                            count++
                            break
                        }
                    }
                }
            }
        }
    }
    return count
}

//return arr.filter(smiley => /^[:;][-~]?[)D]$/.test(smiley)).length;

console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']))