function commonValueArray(array2, array3) {
    const array = array2.filter(number => array3.includes(number));

    console.log(array)
    return array;
}

commonValueArray([6, 8], [8, 9])