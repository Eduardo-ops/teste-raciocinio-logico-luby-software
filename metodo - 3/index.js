function clearArray() {
    const array = [1, 2, "", undefined]
    const array2 = []

    for (i = 0; i <= 4; i++) {
        if (array[i] != false && array[i] != undefined && array[i] != null && array[i] != 0) {
            array2.push(array[i])
        }
    }

    console.log(array2)
    return array2
}

clearArray()