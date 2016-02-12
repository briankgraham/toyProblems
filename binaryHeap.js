var binaryHeap = function () {
  this.heap = [];

}

binaryHeap.prototype.swap = function (index1, index2) {
  var temp = this.heap[index1];
  this.heap[index1] = this.heap[index2];
  this.heap[index2] = temp;
}

binaryHeap.prototype.leftChild = function (index) {
  return (2*index)+1;
};

binaryHeap.prototype.rightChild = function (index) {
  return (2*index)+2;
};

binaryHeap.prototype.getParent = function (index) {
  return Math.floor((index - 1) / 2);
}

binaryHeap.prototype.insert = function (value) {
  if (this.heap[0] === undefined) {
    this.heap[0] = value;
    return;
  }
  // find last element
  this.heap.push(value);

  var lastChild = this.heap.length - 1;
  // compare to its parent
  var parent = this.getParent(lastChild);
  // if greater than parent, swap
  while (this.heap[lastChild] < this.heap[parent]) {
    this.swap(parent, lastChild);
    lastChild = parent;
    parent = this.getParent(lastChild);
  }
};

 // floor((i − 1) ∕ 2)
var bHeap = new binaryHeap();
bHeap.insert(1);
bHeap.insert(5);
bHeap.insert(3);

bHeap.insert(0);

console.log(bHeap.heap);