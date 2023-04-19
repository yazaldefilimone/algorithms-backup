fn main() {
    let arr: [i32; 18] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 3, 14, 1, 15, 16];
    let result = binary_search(&arr, 3);
    match result {
        Some(i) => println!("O elemento 3 foi encontrado na posição {}", i),
        None => println!("O elemento 3 não foi encontrado no array"),
    }
}
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
