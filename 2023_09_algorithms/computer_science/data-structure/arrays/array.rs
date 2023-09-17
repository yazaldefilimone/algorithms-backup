use std::collections::HashMap;
#[warn(special_module_name)]
pub struct ArrayStarch {
  length: i32,
  data: HashMap<i32, i32>,
}

impl ArrayStarch {
  pub fn new() -> ArrayStarch {
    ArrayStarch {
      length: 0,
      data: HashMap::new(),
    }
  }

  pub fn get(&self, index: i32) -> Option<&i32> {
    self.data.get(&index)
  }

  pub fn push(&mut self, item: i32) {
    self.data.insert(self.length, item);
    self.length += 1;
  }
  pub fn pop(&mut self) -> Option<i32> {
    let last_index: i32 = self.length - 1;
    let data_or_none: Option<i32> = match self.data.remove(&last_index) {
      Some(v) => {
        self.length -= 1;
        Some(v)
      }
      None => None,
    };
    return data_or_none;
  }

  pub fn delete(&mut self, index: i32) -> Option<i32> {
    let data_or_none: Option<i32> = match self.data.remove(&index) {
      Some(v) => {
        self._shift_items(index);
        self.length -= 1;
        Some(v)
      }
      None => None,
    };
    return data_or_none;
  }
  fn _shift_items(&mut self, index: i32) -> () {
    let mut i: i32 = index;
    while i < self.length - 1 {
      let next_index: i32 = i + 1;
      let next_value: Option<&i32> = self.data.get(&next_index);
      match next_value {
        Some(v) => {
          self.data.insert(i, *v);
        }
        None => {
          self.data.remove(&i);
        }
      }
      i += 1;
    }
  }
}
