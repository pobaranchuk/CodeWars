function longestConsec(strarr, k) {

    const n = strarr.length

    let highestLength = 0
    let highestConcat = '';

    if(n === 0 || k > n || k <= 0 ){
        return ''
    }else{
        for (let i = 0; i < n; i++) {

            const pairConcat = strarr.slice(i, i + k).join('')

            if(highestLength < pairConcat.length){
                highestLength = pairConcat.length
                highestConcat = pairConcat
            }
        }
        return highestConcat
    }
}

//strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2
//["zone", "abigail", "theta", "form", "libe", "zas"]

longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], k = 5)