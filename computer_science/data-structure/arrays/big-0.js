let list = ["a", "b", "c", "d"];
// 0    1    2    4
// 4*4 = 8 bytes in storage

let accessFirstPosition = list[0]; // O(1);

list.splice(2, 0, "hei"); // O(n)

list.push("e"); // O(1) / O(n)

list.pop(); // O(1)

list.unshift("n"); // O(1)

list.shift(); // O(1)
