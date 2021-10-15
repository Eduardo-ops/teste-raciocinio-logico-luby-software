function divederArray(array2, value) {
    const array = new Array(Math.ceil(array2.length / value)).fill().map(
        _ => array2.splice(0, value)
    )

    console.log(array)
    return array;
}

divederArray([1, 2, 3, 4, 5], 2)