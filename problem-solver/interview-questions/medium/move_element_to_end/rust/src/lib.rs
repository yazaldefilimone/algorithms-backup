mod main;
use main::move_element_to_end;

#[test]
fn test_1() {
  let mut array: Vec<usize> = vec![2, 1, 2, 2, 2, 3, 4, 2];
  let len = array.len();
  let to_move: usize = 2;
  let expected: Vec<usize> = vec![4, 1, 3, 2, 2, 2, 2, 2];
  let result: &Vec<usize> = move_element_to_end(&mut array, to_move);
  assert_eq!(result.len(), len);
  assert_eq!(result, &expected);
}

#[test]
fn test_2() {
  let mut array: Vec<usize> = vec![1, 2, 4, 5, 6];
  let len = array.len();
  let to_move: usize = 3;
  let expected: Vec<usize> = vec![1, 2, 4, 5, 6];
  let result: &Vec<usize> = main::move_element_to_end(&mut array, to_move);
  assert_eq!(result.len(), len);
  assert_eq!(result, &expected);
}

#[test]
fn test_3() {
  let mut array: Vec<usize> = vec![3, 3, 3, 3, 3];
  let len = array.len();
  let to_move: usize = 3;
  let expected: Vec<usize> = vec![3, 3, 3, 3, 3];
  let result: &Vec<usize> = main::move_element_to_end(&mut array, to_move);
  assert_eq!(result.len(), len);
  assert_eq!(result, &expected);
}
