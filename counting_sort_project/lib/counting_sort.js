function countingSort(arr, max) {
    if (arr.length === 1){
        return arr;
    }
    const results = [];
    const count = new Array(max+1).fill(0);
    debugger
    arr.forEach( el => {
        count[el]++;
    })
    count.forEach( (el, idx) => {
        while (el){
            results.push(idx);
            el--;
        }
    })
    return results;
}

console.log(countingSort([4, 9, 0, 23, 15, 100, 66, 41, 5, 10], 100))


module.exports = {
    countingSort
};