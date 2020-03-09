// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        // debugger
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        const newNode = new Node(val);
        if (!this.length) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        
        this.tail = newNode;
        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        const oldTail = this.tail;
        if (!this.length) {
            return undefined
        } 

        let current = this.head;
        let newTail = current;
        while (current.next){
            newTail = current;
            current = current.next;
        }
        newTail.next = null;
        this.tail = newTail;
        this.length--;

        if (!this.length) {
            this.head = null;
            this.tail = null;
        }
        return oldTail;

    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        const temp = this.head;
        this.head = new Node(val);
        this.head.next = temp;
        if (!this.length) this.tail = this.head;
        this.length++;
        return this; 
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        const oldHead = this.head;
        if (!this.length){
            return undefined
        } else if (this.length === 1){
            this.head = null;
            this.tail = null;
            this.length = 0; 
            return oldHead;
        }
        this.head = this.head.next;
        this.length--;
        return oldHead;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let node = this.head;
        while (node){
            if (node.value === target) return true;
            node = node.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (index < 0 || index >= this.length ) return null;
        let count = 0;
        let node = this.head;
        while (count < index) {
            node = node.next;
            count++;
        }
        return node;
    }

    // TODO: Implement the set method here
    set(index, val) {
        const node = this.get(index);
        if (node){
            node.value = val;
            return true;
        } 
        return false
        
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index < 0 || index >= this.length) return false;
        if (index === this.length) return !!this.addToTail(val);
        if (index === 0) return !!this.addToHead(val);
        const newNode = new Node(val);
        
        let temp = this.get(index - 1);
        if (!temp) return false;
        let afterTemp = temp.next;
        temp.next = newNode;
        newNode.next = afterTemp;
        this.length++;
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        const prevNode = this.get(index - 1);
        const node = this.get(index)
        prevNode.next = node.next;
        this.length--;
        return node;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
