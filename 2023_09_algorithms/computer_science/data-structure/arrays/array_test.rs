mod array;
use array::ArrayStarch;

#[test]
fn test_array_starch_method_push_get() {
  let mut starch: ArrayStarch = ArrayStarch::new();
  starch.push(1);
  starch.push(2);
  starch.push(3);
  assert_eq!(starch.get(0), Some(&1));
  assert_eq!(starch.get(1), Some(&2));
  assert_eq!(starch.get(2), Some(&3));
}
#[test]
fn test_array_starch_method_pop() {
  let mut starch: ArrayStarch = ArrayStarch::new();
  starch.push(1);
  starch.push(2);
  starch.push(3);
  assert_eq!(starch.pop(), Some(3));
  assert_eq!(starch.pop(), Some(2));
  assert_eq!(starch.pop(), Some(1));
  assert_eq!(starch.pop(), None);
}

#[test]
fn test_array_starch_method_delete() {
  let mut starch: ArrayStarch = ArrayStarch::new();
  starch.push(1);
  starch.push(2);
  starch.push(3);
  starch.push(4);
  starch.push(5);
  assert_eq!(starch.delete(0), Some(1));
  assert_eq!(starch.delete(3), Some(5));
  assert_eq!(starch.delete(1), Some(3));
  assert_eq!(starch.delete(100), None);
  assert_eq!(starch.delete(1), Some(4));
  assert_eq!(starch.delete(0), Some(2));
  assert_eq!(starch.delete(0), None);
}
