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

// Game
function HotPotato(names, num) {
  var queue = new Queue();

  for (var i = 0; i < names.length; i++) {
    queue.enqueue(names[i]);
  }

  var eliminated = '';

  while (queue.size() > 1) {
    for (var i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log(eliminated + 'was eliminated from the hot Patota Game');
  }
  return queue.dequeue();
}

var names = ['Jao', 'Jose', 'Maria', 'Ana', 'Lucas'];

var winner = HotPotato(names, 7);

console.log(winner + ' is winner');
