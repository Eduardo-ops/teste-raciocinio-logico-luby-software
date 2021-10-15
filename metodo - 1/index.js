function createArray(number, letter) {
    const array = []

    for (i = 1; i <= number; i++) {
        array.push(letter)
    }

    console.log(array)
    return array
}

createArray(3,'a')