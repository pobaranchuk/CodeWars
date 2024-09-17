function high(x){

    const words = x.split(' ')

    let highestScore = 0
    let highestScoreWord = '';

    for (const word of words) {
        const wordScore = [...word].reduce((acc, letter) => acc + (letter.charCodeAt(0) - 96), 0)
        if(highestScore < wordScore){
            highestScore = wordScore
            highestScoreWord = word
        }
    }
    return highestScoreWord
}

console.log(high('take me to semynak'))