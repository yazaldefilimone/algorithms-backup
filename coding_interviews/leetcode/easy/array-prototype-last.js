Array.prototype.last = function (props) {
  return this.length === 0 ? -1 : this.at(-1);
};
const arr = [];
console.log(arr.last());
