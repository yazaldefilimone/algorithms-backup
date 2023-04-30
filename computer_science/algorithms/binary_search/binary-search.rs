fn binary_search(elements: &[i32], search_data: i32) -> Option<usize> {
    let mut down = 0;
    let mut up = elements.len() - 1;
    while down <= up {
        let mid = (down + up) / 2;
        let mid_value = elements[mid];

        if mid_value == search_data {
            return Some(mid);
        } else if mid_value < search_data {
            down = mid + 1;
        } else {
            up = mid - 1;
        }
    }
    None
}
