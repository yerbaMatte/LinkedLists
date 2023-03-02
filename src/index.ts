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
}

const list = new SinglyLinkedList();

const first = new _Node('Hi');
first.next = new _Node('Im next node!');
