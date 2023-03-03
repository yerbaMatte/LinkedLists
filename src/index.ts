//piece of data - val
//reference to next node - next
class _Node {
  val: any;
  next: null | _Node;

  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  head: null | _Node;
  tail: null | _Node;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val: any) {
    const newNode = new _Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current: _Node | null = this.head;
    let newTail: _Node | null = current;
    while (current.next) {
      newTail = current;
      current = current?.next;
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
    if (!this.head) return undefined;
    const currentHead: _Node = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val: any) {
    const newNode = new _Node(val);
    if (!this.head) return this.push(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  get(ind: number): _Node | null {
    if (ind < 0 || ind >= this.length) return null;
    let counter: number = 0;
    let current = this.head;
    while (counter !== ind && current !== null) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(ind: number, val: any) {
    let foundNode: _Node | null;
    if (this.get(ind)) {
      foundNode = this.get(ind);
      if (!foundNode) return false;
      foundNode.val = val;
      return foundNode;
    } else {
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
