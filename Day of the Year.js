let arr = [21,2,57]
function toDayOfYear(arr) {
    const currentDate = new Date(arr[2], arr[1] - 1, arr[0]);

    const newYearDate = new Date(arr[2], 0, 1);

    const timeDifference = currentDate - newYearDate;
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24))
}

console.log(toDayOfYear(arr))