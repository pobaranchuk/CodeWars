

function consecutive(array) {
    const arrayRange = (start, stop, step) =>
        Array.from(
            { length: (stop - start) / step + 1 },
            (value, index) => start + index * step
        );
    debugger
    const newArray = arrayRange(Math.min(...array), Math.max(...array), 1);
    console.log(newArray)
    return newArray.length - array.length
}

console.log(consecutive([4, 8, 6]))