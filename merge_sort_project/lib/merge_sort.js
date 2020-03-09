function merge(array1, array2) {
    const sorted = [];
    while (array1.length && array2.length){
        array1[0] > array2[0] ? sorted.push(array2.shift()) : sorted.push(array1.shift())
    }
    return [...sorted, ...array1, ...array2]
}

function mergeSort(array) {
    if (array.length <= 1) return array;
    
    const mid = Math.floor(array.length/2);
    const left = array.slice(0,mid);
    const right = array.slice(mid);

    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);

    return merge(leftSorted,rightSorted)
}

module.exports = {
    merge,
    mergeSort
};

console.log(mergeSort([1, 3, 2, 4]))