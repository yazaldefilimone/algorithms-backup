const { Queue } = require('../../data-structure/queue/Queue.js');
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
