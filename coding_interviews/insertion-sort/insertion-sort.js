// Time: (n^2) || Space: (1)
export function insertionSort(array) {
  let step_fast = 1;
  let step_slow = 0;
  while (step_fast < array.length) {
    if (array[step_slow] > array[step_fast]) {
      swap(array, step_fast)
    }
    step_fast++
    step_slow++
  }
  return array
}

function swap(array, idx) {
  let slow = idx - 1;
  let current = idx;
  while (slow >= 0) {
    if (array[slow] > array[current]) {
      let store = array[slow];
      array[slow] = array[current];
      array[current] = store
    }
    current = current - 1;
    slow = slow - 1
  }
}

export function insertionSortRefactor(array) {
  let step_fast = 1;
  let step_slow = 0;
  while (step_fast < array.length) {
    if (array[step_slow] > array[step_fast]) {
      swapRefactor(array, step_fast)
    }
    step_fast++
    step_slow++
  }
  return array
}

function swapRefactor(array, idx) {
  let step_after = idx - 1;
  let step_current = idx;
  while (step_after >= 0) {
    if (array[step_after] > array[step_current]) {
      let store = array[step_after];
      array[step_after] = array[step_current];
      array[step_current] = store
    }
    step_current = step_current - 1;
    step_after = step_after - 1
  }
}


