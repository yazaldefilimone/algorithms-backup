pub fn move_element_to_end(array: &mut Vec<usize>, to_move: usize) -> &Vec<usize> {
  let mut left: usize = 0;
  let mut right: usize = array.len() - 1;
  while left < right {
    if array[left] == to_move && array[right] != to_move {
      let store: usize = array[left];
      array[left] = array[right];
      array[right] = store;
      right -= 1;
      left += 1;
      continue;
    }
    if array[left] == to_move && array[right] == to_move {
      right -= 1;
      continue;
    }
    if array[left] != to_move {
      left += 1;
      continue;
    }
    right -= 1;
    left += 1;
  }
  return array;
}

#[warn(dead_code)]
fn main() {
  print!("Hello, world!")
}
