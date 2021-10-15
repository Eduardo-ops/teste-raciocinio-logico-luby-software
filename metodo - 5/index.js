function itemArray(array3, value1, value2) {
    const array = array3.filter(newarray => newarray !== value1 && newarray !== value2)

    console.log(array)
    return array
}

itemArray([5, 4, 3, 2, 5], 5, 3)