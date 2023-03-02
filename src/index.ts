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
