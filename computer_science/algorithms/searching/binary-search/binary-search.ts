export function binary_search(stack: number[], needle: number): boolean {
  let low = 0;
  let len = stack.length;
  do {
    const middle = Math.floor(low + (len - low) / 2);
    const value = stack[middle];
    if (value === needle) {
      return true;
    } else if (value > needle) {
      len = middle;
    } else {
      low = middle + 1;
    }
  } while (low < len);

  return false;
}
