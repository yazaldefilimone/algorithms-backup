export function linear_search_array(hey_stack: number[], target: number): boolean {
  for (let index = 0; index < hey_stack.length; index++) {
    if (hey_stack[index] == target) {
      return true;
    }
  }
  return false;
}
