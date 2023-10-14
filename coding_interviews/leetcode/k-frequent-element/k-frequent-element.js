/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// https://leetcode.com/problems/top-k-frequent-elements/
var topKFrequent = function (nums, k) {
  nums.sort((a, b) => a - b);
  const table = {};
  let current = undefined;
  let time = 0;
  for (const iterator of nums) {
    if (time > 0) {
      if (table[time]) {
        table[time].push(current);
      } else {
        table[time] = [current];
      }
    }
    if (current === undefined) {
      current = iterator;
      time = 1;
      continue;
    }
    if (current === iterator) {
      time++;
      continue;
    }
    time = 1;
    current = iterator;
  }
  if (table[time]) {
    table[time].push(current);
  } else {
    table[time] = [current];
  }
  const keys = Object.keys(table);
  for (let index = keys.length - 1; index >= 0; index--) {
    const current = table[keys[index]];
    if (current.length == k) {
      return current;
    } else if (current.length > k) {
      return current.slice(0, k + 1);
    }
  }
  return [];
};
