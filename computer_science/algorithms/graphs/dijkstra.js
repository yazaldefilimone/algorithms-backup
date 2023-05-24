let costs = {
  a: 6,
  b: 2,
  end: Infinity,
};
let graph = {
  start: {
    a: 6,
    b: 2,
  },
  a: {
    end: 1,
  },
  b: {
    a: 3,
    end: 5,
  },
  end: null,
};
let fathers = {
  a: null,
  b: null,
  end: null,
};
let process = [];

function Dijkstra() {
  let cheap = find_cheap(costs);
  while (cheap !== null) {
    const cost = costs[cheap];
    const neighbors = graph[cheap];
    for (const key in Object.keys(neighbors)) {
      const new_cost = cost + neighbors[key];
      if (costs[key] > new_cost) {
        costs[key] = new_cost;
        fathers[key] = cheap;
      }
    }
    process.push(cheap);
    cheap = find_cheap(costs);
  }
  return cheap;
}
function find_cheap(costs) {
  let cost_cheap = Infinity;
  let key_cost_cheap = null;
  for (const key in costs) {
    const cost = costs[key];
    if (cost < cost_cheap && !process.includes(key)) {
      cost_cheap = cost;
      key_cost_cheap = key;
    }
  }
  return key_cost_cheap;
}

console.log(Dijkstra());
console.log(process);
console.log(fathers);
