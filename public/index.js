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
    pop() {
        if (!this.head)
            return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current === null || current === void 0 ? void 0 : current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return this;
    }
    shift() {
        if (!this.head)
            return undefined;
        const currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val) {
        const newNode = new _Node(val);
        if (!this.head)
            return this.push(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    get(ind) {
        if (ind < 0 || ind >= this.length)
            return null;
        let counter = 0;
        let current = this.head;
        while (counter !== ind && current !== null) {
            current = current.next;
            counter++;
        }
        return current;
    }
    set(ind, val) {
        let foundNode;
        if (this.get(ind)) {
            foundNode = this.get(ind);
            if (!foundNode)
                return false;
            foundNode.val = val;
            return foundNode;
        }
        else {
            return false;
        }
    }
}
const list = new SinglyLinkedList();
list.push(1);
list.push('A');
list.push(3);
list.push('B');
list.push(2);
list.push('C');
//# sourceMappingURL=index.js.map