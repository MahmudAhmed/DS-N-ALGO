class MaxHeap {
    constructor(){
        this.array = [null];
    }

    getParent(idx){
        return Math.floor(idx / 2);
    }

    getLeftChild(idx){
        return 2 * idx;
    }

    getRightChild(idx){
        return 2 * idx + 1;
    }

    siftUp(idx){
        if (idx === 1) return;
        const parentIdx = this.getParent(idx);
        if (this.array[parentIdx] < this.array[idx]){
            [this.array[parentIdx], this.array[idx]] = [this.array[idx], this.array[parentIdx]];
            this.siftUp(parentIdx)
        }
    }
    insert(val) {
        this.array.push(val);
        this.siftUp(this.array.length - 1);
    }

}

module.exports = {
    MaxHeap
};