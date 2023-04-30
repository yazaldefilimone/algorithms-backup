const schema = [27, 37, 33, 26, 24, 25, 20, 40];

function return_small_number_index(arr) {
  let small = 0;
  let storage = arr[0];
  for (let index = 1; index < arr.length; index++) {
    if (arr[index] < storage) {
      small = index;
      storage = arr[index];
    }
  }

  return small;
}

function selection_sort(arr) {
  let result = [];
  let copy = [...arr];
  const num = arr.length;
  for (let index = 0; index < num; index++) {
    const small = return_small_number_index(copy);
    result.push(copy.splice(small, 1)[0]);
  }
  return result;
}

// O(n^2)
function my_selection_sort(arr) {
  for (let index = 0; index < arr.length; index++) {
    let count = 0;
    while (count < arr.length && arr[count + 1]) {
      if (arr[count] > arr[count + 1]) {
        let pay = arr[count + 1];
        arr[count + 1] = arr[count];
        arr[count] = pay;
      }
      count = count + 1;
    }
  }
  return arr;
}

console.log(selection_sort(schema)); //[20, 24, 25, 26, 27, 33, 37, 40]
console.log(my_selection_sort(schema)); //[20, 24, 25, 26, 27, 33, 37, 40]
