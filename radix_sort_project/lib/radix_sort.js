function radixSort(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    const maxDigit = largestDigitInArray(arr);
    for (let k = 0; k <= maxDigit; k++){

        let bucket = Array.from({length: 10}, () => []);
        debugger
        for (let i = 0; i < arr.length; i++){
            let digit = getDigitAt(arr[i], k);
            bucket[digit].push(arr[i]);
        }
        // debugger
        arr = [].concat(...bucket)
    }

    return arr;
}

console.log(radixSort([1,3,2]))
function getDigitLength(num){
    // if (!num) return 0;
    // return 1 + getDigitLength(Math.floor(num / 10))
    return Math.ceil(Math.log10(Math.abs(num)))
}

function largestDigitInArray(nums){
    let largest = 0;
    for (let i = 0; i < nums.length; i++){
        // const newLen = getDigitLength(nums[i]);
        // if (newLen > largest) largest = newLen;
        largest = Math.max(largest, getDigitLength(nums[i]));

    }
    return largest;
}

function getDigitAt(num, place){
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// console.log(getDigitLength(-123))
// console.log(getDigitAt(-54321,0))
// console.log(largestDigitInArray([1,12,123,1234,42]))

module.exports = {
    radixSort
};