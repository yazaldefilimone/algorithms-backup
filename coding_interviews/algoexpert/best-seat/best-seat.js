function bestSeat(seats) {
  let best_seat = -1;
  let maxSpace = 0;
  let left = 0;
  let right = 1;
  while (left < seats.length) {
    right = left + 1;
    while (right < seats.length && seats[right] == 0) {
      right += 1;
    }
    const availableSpace = right - left - 1;
    if (availableSpace > maxSpace) {
      best_seat = Math.floor((right + left) / 2);
      maxSpace = availableSpace;
    }
    left = right;
  }

  return best_seat;
}
