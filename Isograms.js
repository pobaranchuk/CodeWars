//"Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
    let mySet = new Set();
    for (const i of str) {
        if(mySet.has(i)){
            return false
        }
        else {
            mySet.add(i)
        }
    }
    return true
}

console.log(isIsogram("Dermatoglyphics"))