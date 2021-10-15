function notValueDuplication(arrayParans) {
    const array = []

    for (value of arrayParans) {
        if (array.indexOf(value) === -1) {
            array.push(value)
        }
    }


    console.log(array)
    return array
}

notValueDuplication([1, 2, 3, 3, 2, 4, 5, 4, 7, 3])