function binarySearch(array, target) {
    if (!array.length) return false;

    const mid = Math.floor(array.length/2);

    const left = array.slice(0,mid);
    const right = array.slice(mid + 1);
    // debugger
    if (array[mid] < target){
        return binarySearch(right, target);
    } else if (array[mid] > target){
        return binarySearch(left, target);
    } else {
        return true
    }
    
}
console.log(binarySearchIndex([0, 1, 2, 2, 3], -1))

function binarySearchIndex(array, target) {
    if (!array.length) return -1;

    const mid = Math.floor(array.length / 2);
    
    const left = array.slice(0, mid);
    const right = array.slice(mid + 1);
    if (array[mid] < target) {
        debugger
        const result = binarySearchIndex(right, target);
        return result === -1 ? -1 : result + mid + 1; 
    } else if (array[mid] > target) {
        return binarySearchIndex(left, target);
    } else {
        return mid
    }
}


module.exports = {
    binarySearch,
    binarySearchIndex
};