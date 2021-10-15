function removeNestedArray() {
    const array = [1, 2, [3], [4, 5]]
    const array2 = []

    const array3 = array.map(value => array2.push(value))

    console.log(array3)
    return array3
}

removeNestedArray()