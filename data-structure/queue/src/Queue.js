function Queue() {
  var items = [];

  this.enqueue = function (element) {
    items.push(element);
  };

  this.dequeue = function () {
    return items.shift();
  };

  this.front = function () {
    return items[0];
  };

  this.isEmpty = function () {
    return items.length === 0;
  };

  this.size = function () {
    return items.length;
  };

  this.print = function () {
    console.log(items.toString());
  };
}

var queue = new Queue();

queue.enqueue('Carlos');
queue.enqueue('Ana');
queue.enqueue('Lucas');

console.log('front:', queue.front());
console.log('isEmpty:', queue.isEmpty());
queue.print();
queue.dequeue();
queue.print();
queue.dequeue();
queue.print();
