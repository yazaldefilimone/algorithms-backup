function processingPlaneSeatReservations(N, S) {
  if (S.length <= 0) {
    return 2;
  }
  const spaces_one = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K"];

  const seats = Array.from({ length: N }, () => Array(10).fill(false));
  const reservedSeats = S.split(" ");
  let families = 0;

  // Marca os assentos reservados como ocupados
  for (let index = 0; index < reservedSeats.length; index++) {
    const seat = reservedSeats[index];
    const int = parseInt(seat);
    const str = seat.substring(String(int).length);
    const row = int - 1;
    const col = spaces_one.indexOf(str);
    console.log({ index: spaces_one.indexOf(str), seat: str });
    console.log({ row, col });
    seats[row][col] = true;
  }

  // Verifica quantas famílias podem ser acomodadas em cada fileira
  for (let currentColl = 1; currentColl < N; currentColl++) {
    let currentSeat = 0;
    while (currentSeat < 10) {
      if (!seats[currentColl][currentSeat]) {
        if (
          currentSeat + 3 < 10 &&
          !seats[currentColl][currentSeat + 1] &&
          !seats[currentColl][currentSeat + 2] &&
          !seats[currentColl][currentSeat + 3]
        ) {
          families++;
          currentSeat += 4;
        } else if (
          currentSeat + 3 < 10 &&
          !seats[currentColl][currentSeat + 1] &&
          !seats[currentColl][currentSeat + 2] &&
          !seats[currentColl][currentSeat + 3]
        ) {
          families++;
          currentSeat += 4;
        } else if (
          currentSeat + 5 < 10 &&
          !seats[currentColl][currentSeat + 1] &&
          !seats[currentColl][currentSeat + 4] &&
          !seats[currentColl][currentSeat + 5]
        ) {
          families++;
          currentSeat += 6;
        } else {
          currentSeat++;
        }
      } else {
        currentSeat++;
      }
    }
  }

  return families;
}
