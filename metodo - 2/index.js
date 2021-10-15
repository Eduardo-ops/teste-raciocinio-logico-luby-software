function invertArray() {
    const array = [1, 2, 3, 4]
    const array2 = []

    for (i = array.length - 1; i >= 0; i--) {
        array2.push(array[i])
    }

    console.log(array2)
    return array2
}

invertArray()