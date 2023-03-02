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
}
const list = new SinglyLinkedList();
const first = new _Node('Hi');
first.next = new _Node('Im next node!');
