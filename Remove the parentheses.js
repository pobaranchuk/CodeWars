function removeParentheses(s) {
    let modified = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            let j = i + 1;
            let count = 1;

            while (count > 0 && j < s.length) {
                if (s[j] === "(") {
                    count++;
                } else if (s[j] === ")") {
                    count--;
                }
                j++;
            }

            modified += s.slice(i + 1, j - 1);
            i = j - 1;
        } else {
            modified += s[i];
        }
    }

    return modified;
}
console.log(removeParentheses("a(b(c))"))