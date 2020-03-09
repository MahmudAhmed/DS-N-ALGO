function quickSort(array) {
    if (array.length <= 1) return array;

    const pivot = array.shift();

    const left = array.filter( el => el < pivot);
    const right = array.filter( el => el >= pivot);

    return [...quickSort(left), pivot, ...quickSort(right)]
}


module.exports = {
    quickSort
};