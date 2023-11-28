let vowelStr = ['a', 'e', 'i', 'o', 'u']

const vowelCount = (myString)=>{
    let count = 0
    myString.split("").forEach((f)=> vowelStr.includes(f) &&  count ++)
    return count
}

console.log(vowelCount("abracadabra"))