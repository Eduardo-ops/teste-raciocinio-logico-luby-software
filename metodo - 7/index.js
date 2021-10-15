function equalArray(arrayParams1, arrayParams2) {

    const array = arrayParams1.length == arrayParams2.length && arrayParams1.every(function (value, index) {
        return value === arrayParams2[index];
    })
    console.log(array)
    return array

}

equalArray([1, 2, 3, 4], [1, 2, 3, 4])