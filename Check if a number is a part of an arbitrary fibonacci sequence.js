function isFibo(a, b, f) {
    if (a === f || b === f) return true

    let current;
    while (b <= f) {
        current = a + b;
        if (current === f) return true;
        a = b;
        b = current;
    }
    return false;
}

console.log(isFibo(1,3,1))