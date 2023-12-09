function oneDown(str) {
    if(typeof str !== "string") return "Input is not a string"
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let decrypted = ""
    for (let i in str) {
        const index = alphabet.indexOf(str[i]);
        decrypted += index === -1 ? str[i] : alphabet[(index + alphabet.length - 1) % alphabet.length];
    }
    return decrypted
}

console.log(oneDown(22))