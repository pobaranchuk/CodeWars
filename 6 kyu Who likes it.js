function likes(names) {
    const namesCount = names.length

    switch (true) {
        case namesCount === 1: {
            return `${names[0]} likes this`
        }
        case namesCount === 2: {
            return `${names[0]} and ${names[1]} like this`
        }
        case namesCount === 3: {
            return `${names[0]}, ${names[1]} and ${names[2]} like this`
        }
        case namesCount >= 4: {
            return `${names[0]}, ${names[1]} and ${namesCount - 2} others like this`
        }
        default: return 'no one likes this'
    }
}

console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))

//assert.strictEqual(likes([]), 'no one likes this');
//     assert.strictEqual(likes(['Peter']), 'Peter likes this');
//     assert.strictEqual(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
//     assert.strictEqual(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
//     assert.strictEqual(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');