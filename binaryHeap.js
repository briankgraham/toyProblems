var binaryHeap = function (max) {
  this.heap = [];
  this.compare = function (idx1, idx2) { // (child, parent) --> min heap
    return max === 'max' ? this.heap[idx1] > this.heap[idx2] : this.heap[idx1] < this.heap[idx2];
  }
};

binaryHeap.prototype.swap = function (index1, index2) {
  var temp = this.heap[index1];
  this.heap[index1] = this.heap[index2];
  this.heap[index2] = temp;
};

binaryHeap.prototype.leftChild = function (index) {
  return (2*index) + 1;
};

binaryHeap.prototype.rightChild = function (index) {
  return (2*index) + 2;
};

binaryHeap.prototype.getParent = function (index) {
  return Math.floor((index - 1) / 2);
};

binaryHeap.prototype.smallestIndex = function (idx1, idx2) {
  return this.heap[idx1] < this.heap[idx2] ? idx1 : idx2;
};

binaryHeap.prototype.removeRoot = function () {

  this.swap(0, this.heap.length - 1);

  var deleted = this.heap.pop();

  var parent = 0;

  var children = [this.leftChild(parent), this.rightChild(parent)];

  var smallChild = this.smallestIndex(children[0], children[1]);

  while (this.compare(smallChild, parent)) {
    this.swap(smallChild, parent);
    parent = smallChild;
    children = [this.leftChild(parent), this.rightChild(parent)];
    smallChild = this.smallestIndex(children[0], children[1]);
  }

  return deleted;
};

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
  while (this.compare(lastChild, parent)) {
    this.swap(parent, lastChild);
    lastChild = parent;
    parent = this.getParent(lastChild);
  }
};

 // floor((i − 1) ∕ 2)
var bHeap = new binaryHeap('max');
bHeap.insert(1);
bHeap.insert(5);
bHeap.insert(3);

bHeap.insert(0);
bHeap.removeRoot();

console.log(bHeap.heap);