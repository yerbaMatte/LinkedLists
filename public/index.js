"use strict";
//piece of data - val
//reference to next node - next
class _Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const newNode = new _Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else if (this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    traverse() {
        let current = this.head;
        console.log(current);
        while (current !== null) {
            current = current.next;
        }
    }
}
const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
// list.push(2);
// list.push(3);
list.traverse(); // prints 1 2 3
