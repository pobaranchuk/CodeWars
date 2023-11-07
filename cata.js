let someString = "24z6 1z23 y369 89z 900b";

const doMath = (string) => {

    let letterUnsortedArray = string.split(" ").map((str) => {
        let num = "";
        let elems = "";

        for (let i = 0; i < str.length; i++) {
            isNaN(str[i]) ? num += str[i] : elems += str[i];
        }
        return num + elems
    })
    let letterSortedArray = letterUnsortedArray.sort((a, b) => {
        // Разделяем строку на части: буквы и числа
        const [aLetters, aNumbers] = a.match(/([a-z]+)([0-9]+)/i).slice(1);
        const [bLetters, bNumbers] = b.match(/([a-z]+)([0-9]+)/i).slice(1);

        // Сравниваем буквенные части
        if (aLetters < bLetters) return -1;
        if (aLetters > bLetters) return 1;

        // Если буквенные части одинаковы, сравниваем числовые части как числа
        return parseInt(bNumbers) - parseInt(aNumbers);
    })

    let numberSortedArray = letterSortedArray.map((elem) => {
        let numbers = "";
        for (let i = 0; i < elem.length; i++) {
            if(!isNaN(elem[i])){
                numbers += elem[i]
            }
        }
        return numbers
    }).map((elem) => { return Number(elem)})
    console.log(numberSortedArray)

    let operators = ['+', '-', '*', '/']
    let selectedOperator;
    let answer = numberSortedArray[0];

    for (let i = 1; i < numberSortedArray.length; i++) {
        if (i <= operators.length) {
            selectedOperator = operators[i - 1];
        } else {
            debugger
            selectedOperator = operators[i % operators.length ? i % operators.length - 1 : 3];
        }
        console.log(selectedOperator)

        switch (selectedOperator) {
            case '+':
                answer = answer + numberSortedArray[i];
                break;
            case '-':
                answer = answer - numberSortedArray[i];
                break;
            case '*':
                answer = answer * numberSortedArray[i];
                break;
            case '/':
                answer = answer / numberSortedArray[i];
                break;
        }
    }

    return Math.round(answer)
}

console.log(doMath(someString))

