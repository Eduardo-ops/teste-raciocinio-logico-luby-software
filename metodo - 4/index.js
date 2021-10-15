function convertArrayObject() {
    const array = [["c", 2], ["d", 4]]
    const array2 = Object.fromEntries(array)

    console.log(array2)
    return array2
}

convertArrayObject()